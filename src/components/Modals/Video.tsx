import { IoMdClose } from "react-icons/io";

interface PropSchema {
  hideModal: () => void;
  embedVideoHandler: any;
  setVideoUrl: any;
}

export const Video = ({
  hideModal,
  setVideoUrl,
  embedVideoHandler,
}: PropSchema) => {
  const videoLinkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(e.target.value);
  };

  const embedHandler = () => {
    embedVideoHandler();
    hideModal();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-4 px-10 w-3/4 md:w-2/4 rounded-lg shadow-lg relative">
        <button onClick={hideModal} className="absolute right-10 font-bold">
          <IoMdClose fontSize="1.3em" />
        </button>
        <h3 className="font-bold">Embed</h3>
        <p className="my-4">VIDEO PROVIDER</p>
        <select className="block p-4 w-full pr-4 bg-gray-100 border rounded-sm border-gray-200 py-1 focus:outline-none">
          <option value="">Youtube</option>
          <option value="">google</option>
        </select>

        <p className="mt-4">Url</p>
        <input
          className="block p-4 w-full border bg-gray-100 border-gray-200 py-1  focus:outline-none rounded-sm"
          type="text"
          onChange={videoLinkHandler}
        />

        <button
          onClick={embedHandler}
          className="bg-green-700 px-6 py-2 my-4 rounded-md text-white  "
        >
          Embed
        </button>
        <button
          onClick={hideModal}
          className="ml-5 px-6 py-2 my-4 rounded-md bg-gray-200 hover:bg-gray-400 "
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
