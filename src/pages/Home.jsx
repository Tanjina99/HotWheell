import React from "react";
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import BestSeller from "../components/BestSeller";
import BrandPage from "../components/BrandPage";
import AdvertiseSection from "../components/AdvertiseSection";
import SimpleBanner from "../components/SimpleBanner";
import FeaturedServices from "../components/FeaturedServices";
import CustomerFeedback from "../components/CustomerFeedBack";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <BestSeller />
      <BrandPage />
      <AdvertiseSection />
      <SimpleBanner />
      <FeaturedServices />
      <CustomerFeedback />
      <Footer />
    </>
  );
};

export default Home;
