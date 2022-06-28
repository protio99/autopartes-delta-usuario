import React from "react";
import HomeBrands from "../components/Home/HomeBrands";
import HomeContactForm from "../components/Home/HomeContactForm";
import HomeNewProducts from "../components/Home/HomeNewProducts";
import Footer from "../components/FooterComponent/Footer";
import HomeBanner from "../components/Home/HomeBanner";
export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeBrands />
      <HomeNewProducts />
      <HomeContactForm />
      <Footer />
    </>
  );
}
