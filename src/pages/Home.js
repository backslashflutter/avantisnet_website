import React from "react";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Portfolio from "../components/Portfolio";
import CallToAction from "../components/CallToAction"; 
import Footer from "../components/Footer";

 


const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Services/>
      <Clients />
      <Portfolio />
      <CallToAction/>
      <Footer/>

      
     
    </>
  );
};

export default Home;
