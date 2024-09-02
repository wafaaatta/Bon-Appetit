import axios from "axios";
import Header from "../components/Header";
import { useEffect } from "react";

const Profile = () => {
  const getUsers = () => {
    axios.get("http://127.0.0.1:8000/api/user").then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center ml-10">
        <div className="flex flex-col">
          <h2 className="">Mon Profile</h2>
          <div className="bloc flex flex-col gap-10">
            <div>
              <div>getUsers</div>
              <div>users</div>
            </div>
            <div>
              <div>getRecipes</div>
              <div>recipes</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
