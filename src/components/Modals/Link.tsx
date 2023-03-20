import { IoMdClose } from "react-icons/io";

interface PropSchema {
  hideModal: () => void;
  embedLinkHandler: any;
  setVideoUrl: any;
}

export const Link = ({
  hideModal,
  setVideoUrl,
  embedLinkHandler,
}: PropSchema) => {
  const videoLinkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(e.target.value);
  };

  const embedHandler = () => {
    embedLinkHandler();
    hideModal();
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
        <div className="bg-white p-4 rounded-lg shadow-lg relative">
          <button onClick={hideModal} className="absolute right-10 font-bold">
            <IoMdClose fontSize="1.3em" />
          </button>
          <h3 className="font-bold">Embed</h3>
          <p className="my-4">SOCIAL MEDIA PLATFORM </p>
          <select
            name=""
            id=""
            className="block p-4 pr-44 border border-gray-300 py-1 rounded-sm w-full focus:outline-none"
          >
            <option value="">Youtube</option>
            <option value="">google</option>
          </select>

          <p className="mt-4">Url</p>
          <input
            className="block pl-4 pr-60 border border-gray-300 py-1 rounded-sm focus:outline-none"
            type="text"
            onChange={videoLinkHandler}
          />

          <p className="mt-8">Code</p>
          <input
            className="block pl-4 pr-60 border border-gray-300 py-1 rounded-sm focus:outline-none"
            type="text"
            onChange={videoLinkHandler}
          />

          <div className="flex justify-between md:gap-60 my-5 relative">
            <p>Disable caption</p>

            <div className="flex items-center justify-center mb-12">
              <label
                htmlFor="toggleB"
                className="flex items-center cursor-pointer"
              >
                <div className="relative">
                  <input type="checkbox" id="toggleB" className="sr-only " />

                  <div className="block bg-gray-700 w-10 h-6 rounded-full"></div>

                  <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                </div>
              </label>
            </div>
          </div>

          <button
            onClick={embedHandler}
            className="bg-green-700 px-6 py-2 my-4 rounded-md text-white"
          >
            Embed
          </button>
          <button className="ml-5 px-6 py-2 my-4 rounded-md bg-gray-200 ">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
