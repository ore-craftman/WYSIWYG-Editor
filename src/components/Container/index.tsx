interface PropSchema {
  children: JSX.Element[] | JSX.Element;
}
export const Container = ({ children }: PropSchema) => {
  return (
    <div className="mt-20 mb-3 mx-auto w-11/12 md:w-3/5 lg:w-3/6 2xl:w-2/5">
      <section className="border border-slate-200 rounded-md  mb-2">
        <div
          className="w-full bg-slate-200 mt-12"
          style={{ height: "1px" }}
        ></div>

        <div className="p-3">{children}</div>
      </section>
    </div>
  );
};
