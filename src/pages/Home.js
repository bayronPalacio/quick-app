import React from "react";
import NavBar from "../components/NavBar";
import CarouselView from "../components/CarouselView";
import Footer from "../components/Footer";
import Cookies from "js-cookie";

const Home = () => {
  Cookies.remove("Company");
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="backgroundHome">
        <CarouselView />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
