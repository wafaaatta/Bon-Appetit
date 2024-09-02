import Banner from "../components/Banner";
import BannerBottom from "../components/BannerBottom";
import Card from "../components/Card";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LastRecipe from "../components/LastRecipe";
import SearchBar from "../components/SearchBar";

const Homepage = () => {
  return (
    <>
      <Header />
      <Banner />
      <div>
        <div className="bloc flex flex-col justify-center items-center">
          <div className="bloc flex flex-col items-center">
            <LastRecipe />
            <h2>Categories</h2>
            <div className="flex gap-5">
              <Categories />
              <Categories />
              <Categories />
            </div>
          </div>
        </div>
      </div>
      <BannerBottom />
      <Footer />
    </>
  );
};
export default Homepage;
