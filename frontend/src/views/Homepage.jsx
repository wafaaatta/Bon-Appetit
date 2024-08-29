import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const Homepage = () => {
  return (
    <>
      <Header />
      <Banner />
      <div>
        <div className="bloc flex flex-col justify-center items-center">
          <h2>Nos Dernières Recettes</h2>
          <div className="flex flex-wrap items-center justify-center">
            <div className="mt-5 flex justify-center flex-wrap w-3/4">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div></div>
        </div>
      </div>
      {/* <div className="mb-40"></div> */}
      <Footer />
    </>
  );
};
export default Homepage;
