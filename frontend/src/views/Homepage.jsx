import Banner from "../components/Banner";
import Card from "../components/Card";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const Homepage = () => {
  return (
    <>
      <Header />
      {/* <div className="block-principal flex bg-center bg-no-repeat w-full bg-cover">
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
          <div className="bg-white rounded flex">
            <SearchBar />
            <div className="flex justify-center items-center rounded">
              <p className="flex items-center text-white bg-second-color h-11 font-bold">
                Rechercher
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <Banner />
      <div className="">
        <SearchBar />
      </div>
      <div>
        <div className="bloc flex flex-col justify-center items-center">
          <h2>Nos Dernières Recettes</h2>
          <div className="flex flex-wrap items-center justify-center">
            <div className="mt-5 flex justify-center flex-wrap w-3/4">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-40"></div>
    </>
  );
};
export default Homepage;
