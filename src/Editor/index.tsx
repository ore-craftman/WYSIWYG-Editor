import { useState } from "react";
import { Container } from "components/Container";
import { EditorTitle } from "components/EditorTitle";
import { EditorContent } from "components/EditorContent";
import { EditorEmbedAsset } from "components/EditorEmbedAsset";

export const Editor = () => {
  const [value, setValue] = useState("");
  const [quillRef, setQuillRef]: any = useState(null);
  const getRef = (ref: any) => setQuillRef(ref);

  return (
    <>
      <Container>
        {/* Title */}
        <EditorTitle />
        {/* Content */}
        <EditorContent value={value} stateHandler={setValue} liftRef={getRef} />
        {/* Embed asset */}
        <EditorEmbedAsset quillRef={quillRef} />
      </Container>
      <div className="mx-auto w-11/12 md:w-3/5 lg:w-3/6 2xl:w-2/5 mb-10">
        <div className="flex justify-end">
          <button className="bg-green-700 text-white px-6 py-2 rounded-md">
            Post
          </button>
        </div>
      </div>
    </>
  );
};
