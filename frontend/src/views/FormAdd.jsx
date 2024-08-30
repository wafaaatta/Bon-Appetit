import Banner from "../components/Banner";
import Header from "../components/Header";

const FormAdd = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className="bloc flex items-center justify-center ">
        <div className="flex flex-col justify-center items-cente border rounded w-3/5">
          <div className="flex ml-4 mt-10">
            <h2 className="font-bold">Ajouter Recette</h2>
          </div>
          <div className="flex flex-row gap-4 w-full ml-4 mt-10">
            <div className="flex flex-col w-2/5 gap-3">
              <div>
                Nom: <br />
                <input
                  className="input-text"
                  type="text"
                  placeholder="Inserez un nom"
                />
              </div>
              <div>
                Ingredients: <br />
                <textarea
                  placeholder="Inserez les ingredients"
                  name=""
                  id=""
                ></textarea>
              </div>
            </div>
            <div className="flex flex-col  w-2/5 gap-3">
              <div>
                Preparations: <br />
                <textarea
                  placeholder="Inserez la preparation"
                  name=""
                  id=""
                ></textarea>
              </div>
            </div>
          </div>
          <div></div>
          <div>
            <div className="flex w-2/5 gap-3">
              <input
                className="input-text"
                type="text"
                placeholder="ingredient"
              />
              <button>ajouter ingredient +</button>
            </div>
          </div>
          <div className="flex ml-4 mt-10">
            <h4>Categories :</h4>
          </div>
          <div className="flex justify-center ml-4 mt-10 mb-10 bg-first-color w-40 h-10 rounded-full text-white">
            <button>Ajouter</button>
          </div>
        </div>
      </div>
      <div className="mb-96"></div>
    </>
  );
};
export default FormAdd;
