import axios from "axios";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const getRecipeByName = (name) => {
    console.log(name);

    axios
      .get("http://127.0.0.1:8000/api/getRecipeByName/" + name)
      .then((response) => {
        console.log(response);
        setData(response);
      });
  };

  return (
    <>
      <div className="bg-white rounded flex">
        <input
          onChange={(e) => getRecipeByName(e.target.value)}
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
