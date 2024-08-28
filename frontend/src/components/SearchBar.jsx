const SearchBar = () => {
  return (
    <>
      <div className="bg-white rounded flex">
        <input className="w-96 h-11" type="text" />
        <div className="flex justify-center items-center rounded">
          <p className="flex items-center text-white bg-second-color h-11 font-bold">
            Rechercher
          </p>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
