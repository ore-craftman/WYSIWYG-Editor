import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { quillModules } from "./utils";

interface PropSchema {
  value: string;
  liftRef: React.Dispatch<React.SetStateAction<any>>;
  stateHandler: React.Dispatch<React.SetStateAction<string>>;
}

export const EditorContent = ({ value, stateHandler, liftRef }: PropSchema) => {
  const quillRef: any = useRef(null);
  const [showContentEditor, setShowContentEditor] = useState(false);
  const editorViewHandler = () => setShowContentEditor(true);

  useEffect(() => {
    liftRef(quillRef);
  }, [quillRef]);

  return (
    <>
      <div className="mb-4">
        {showContentEditor ? (
          <ReactQuill
            ref={quillRef}
            modules={quillModules}
            theme="snow"
            value={value}
            onChange={stateHandler}
            placeholder="Add content"
          />
        ) : (
          <div
            contentEditable={true}
            onClick={editorViewHandler}
            className="border-none focus:outline focus:outline-slate-200 rounded-sm py-2 cursor-text"
          >
            <p className="pl-1 text-slate-400 text-sm" contentEditable={false}>
              Add content
            </p>
          </div>
        )}
      </div>
    </>
  );
};
