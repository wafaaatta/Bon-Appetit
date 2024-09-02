import { useDispatch, useSelector } from "react-redux";
import { setcategoryId } from "../slice/CategorySlice";

const Categories = ({ category }) => {
  const dispatch = useDispatch();
  const sendCategoryId = (value) => {
    dispatch(setcategoryId(value))
  }

  return (
    <>
      <div className=" bloc flex flex-col items-center justify-center border gap-2 rounded p-5" id={category.id} onClick={(e) => 
        sendCategoryId(e.currentTarget.id)
        }>
        <img className="w-24" src="/src/assets/images-ba/card-img.png" alt="" />
        <h3>{category.name}</h3>
      </div>
    </>
  );
};
export default Categories;
