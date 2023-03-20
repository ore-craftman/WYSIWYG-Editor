import { useState } from "react";
import { IoMdClose } from "react-icons/io";

interface PropSchema {
  hideModal: () => void;
  embedImageHandler: any;
  setSelectedImage: any;
}

export const Picture = ({
  hideModal,
  setSelectedImage,
  embedImageHandler,
}: PropSchema) => {
  const [fileName, setFile] = useState("");

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null && e.target.files.length > 0) {
      var fileName = e.target.files[0];
      setFile(fileName.name);
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const embedHandler = () => {
    embedImageHandler();
    hideModal();
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 px-10 w-3/4 md:w-2/4 rounded-lg shadow-lg relative">
        <button onClick={hideModal} className="absolute right-10 font-bold">
          <IoMdClose fontSize="1.3em" />
        </button>
        <h3 className="font-bold">Embed</h3>
        <p className="mt-4">Upload image</p>
        <p className="mt-8 mb-1 text-sm">File upload</p>
        <div className="border-dashed border rounded-md border-green-500 w-full">
          <div className="px-10 md:px-32 lg:px-52 py-5 md:py-10">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="files"
              onChange={handleImageSelect}
            />

            <label
              htmlFor="files"
              className="text-sm block text-center border rounded-md bg-white border-green-500 p-2"
            >
              {fileName
                ? `Selected image: ${fileName.slice(0, 8)}`
                : "Import image from device"}
            </label>
          </div>
        </div>
        <button
          onClick={embedHandler}
          className="bg-green-700 px-6 py-2 my-4 rounded-md text-white "
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
