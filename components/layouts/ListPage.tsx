const ListPage = ({ children }: any) => {
  return (
    <div className="cards flex flex-col items-center gap-4 text-slate-900 md:max-w-4xl md:mx-auto">
      {children}
    </div>
  );
};

export default ListPage;
