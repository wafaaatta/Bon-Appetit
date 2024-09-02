import { useDispatch } from "react-redux";
import { setSearchValue } from "../slice/SearchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const getName = (value) =>  {
    dispatch(setSearchValue(value))
  }

  return (
    <>
      <div className="bg-white rounded flex">
        <input
          onChange={(e) => getName(e.target.value)}
          className="w-96 h-11"
          type="text"
        />
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
