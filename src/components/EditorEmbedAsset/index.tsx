import { useState } from "react";
import { AiFillPicture, AiFillVideoCamera } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { BsFillShareFill } from "react-icons/bs";
import { Picture } from "components/Modals/Picture";
import { Video } from "components/Modals/Video";
import { Link } from "components/Modals/Link";

export const EditorEmbedAsset = ({ quillRef }: { quillRef: any }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [videoLink, setVideoLink] = useState("");
  const [showDropdown, setShowDropDown] = useState(false);
  const [showModal, setShowModal] = useState({
    picture: false,
    video: false,
    link: false,
  });

  const embedImageHandler = () => {
    const editor = quillRef.current?.getEditor();
    const range = editor?.getSelection()?.index || 0;
    const embedRange = { index: range + 1 };
    editor?.insertEmbed(embedRange, "image", selectedImage);

    const nextLineIndex = editor?.getLength() - 1;
    editor?.setSelection(nextLineIndex, 0);
  };

  const embedVideoHandler = () => {
    const editor: any = quillRef.current?.getEditor();
    const range: any = editor?.getSelection()?.index || 0;
    const embedRange: any = { index: range + 1 };
    var embedLink = getVideoUrl(videoLink);

    editor?.insertEmbed(embedRange, "video", embedLink);

    const nextLineIndex = editor?.getLength() - 1;
    editor?.setSelection(nextLineIndex, 1);
  };

  const embedLinkHandler = () => {};

  const getVideoUrl = (url: string) => {
    let match =
      url.match(
        /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/
      ) ||
      url.match(
        /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/
      ) ||
      url.match(/^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);
    if (match && match[2].length === 11) {
      return "https" + "://www.youtube.com/embed/" + match[2] + "?showinfo=0";
    }
    if ((match = url.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))) {
      // eslint-disable-line no-cond-assign
      return (
        (match[1] || "https") + "://player.vimeo.com/video/" + match[2] + "/"
      );
    }
    return null;
  };

  return (
    <>
      <div className="border-t-0">
        <div
          onClick={() => {
            setShowDropDown(!showDropdown);
          }}
          className="cursor-pointer bg-green-100 rounded-full w-8 h-8 flex my-6 justify-center items-center mt-3"
        >
          <span className="text-gray-700 align-center">
            <IoMdAdd />
          </span>
        </div>
        {showDropdown && (
          <div
            id="embeds"
            className="rounded-sm -mt-4 bg-white w-2/4 overflow md:w-2/5 px-2 lg:px-3 py-4"
            style={{ boxShadow: "0px 1px 13px 2px #cfcdcfa9" }}
          >
            <h3 className="font-semibold text-md">Embeds</h3>
            <div
              onClick={() => {
                setShowModal({ ...showModal, picture: true });
                setShowDropDown(false);
              }}
              className="cursor-pointer flex gap-3 mt-3"
            >
              <AiFillPicture className="my-1" />
              <div>
                <p className="text-sm font-medium">Picture</p>
                <small className="text-xs">.jpeg, .png</small>
              </div>
            </div>

            <div
              onClick={() => {
                setShowModal({ ...showModal, video: true });
                setShowDropDown(false);
              }}
              className="cursor-pointer flex gap-3 mt-3"
            >
              <AiFillVideoCamera className="my-1" />
              <div>
                <p className="text-sm font-medium">Video</p>
                <small className="text-xs">Embed a youtube video</small>
              </div>
            </div>

            <div
              onClick={() => setShowModal({ ...showModal, link: true })}
              className="cursor-pointer flex gap-3 mt-3"
            >
              <BsFillShareFill className="my-1" />

              <div>
                <p className="text-sm font-medium">Social</p>
                <small className="text-xs">Embed a facebook link</small>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        {showModal.picture && (
          <Picture
            setSelectedImage={setSelectedImage}
            embedImageHandler={embedImageHandler}
            hideModal={() => setShowModal({ ...showModal, picture: false })}
          />
        )}
        {showModal.video && (
          <Video
            setVideoUrl={setVideoLink}
            embedVideoHandler={embedVideoHandler}
            hideModal={() => setShowModal({ ...showModal, video: false })}
          />
        )}

        {showModal.link && (
          <Link
            setVideoUrl={setVideoLink}
            embedLinkHandler={embedLinkHandler}
            hideModal={() => setShowModal({ ...showModal, link: false })}
          />
        )}
      </div>
    </>
  );
};
