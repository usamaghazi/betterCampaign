import React from "react";
import Header from "../../components/Header/Header";
import Home from "./Home";
import CardSection from "./CardSection";
import Campagne from "./Campagne";
import Footer from "../../components/Footer/Footer";
const MainPage = () => {
  return (
    <div>
      <Header />
      <Home />
      <CardSection />
      <Campagne />
      <Footer />
    </div>
  );
};
export default MainPage;
