import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Navbar from "../Navbar";
import Footer from "../Footer";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="media/images/kite.png"
        productName="Kite"
        productDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        lernMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection 
       imageUrl="media\images\console.png"
        productName="Console"
        productDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo=""
        lernMore=""
        googlePlay=""
        appStore=""
        />

      <LeftSection
        imageUrl="media/images/coin.png"
        productName="Coin"
        productDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        lernMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection 
       imageUrl="media\images\kiteconnect.png"
        productName="Kite Connect API"
        productDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo=""
        lernMore=""
        googlePlay=""
        appStore=""
        />
      <LeftSection
        imageUrl="media/images/varsity.png"
        productName="Varsity mobile"
        productDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        lernMore=""
        googlePlay=""
        appStore=""
      />
      <p className="mt-5 text-center text-muted fs-4 p-5">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <Universe />
    </>
  );
}

export default ProductPage;
