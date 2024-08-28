import SearchBar from "./SearchBar";

const Banner = () => {
  return (
    <>
      <div className="block-principal flex bg-center bg-no-repeat w-full bg-cover">
        <img
          className="bg-center bg-no-repeat w-full bg-cover"
          src="src/assets/images-ba/imagefond.png"
          alt=""
        />
        <div className="block-principal-text">
          <div>
            <h1 className="text-white">Testez Les Meilleurs Plats Sur Terre</h1>
          </div>
          <div className="text-white">
            Bienvenue sur notre site de recettes, votre destination ultime pour
            des idées culinaires inspirantes et savoureuses! Que vous soyez un
            chef expérimenté ou un cuisinier débutant, notre plateforme vous
            offre une collection variée de recettes faciles à suivre, adaptées à
            tous les goûts et occasions.
          </div>
          <SearchBar />
        </div>
      </div>
    </>
  );
};
export default Banner;
