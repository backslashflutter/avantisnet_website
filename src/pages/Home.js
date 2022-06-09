import React from "react";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Clients from "../components/OurClients";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import PortfolioNew from "../components/portfolio_new/PortfolioNew";
class Home extends React.Component {
  render() {
    return (
      <>
        <Hero />
        <Intro />
        <Services />
        <PortfolioNew />
        <Clients />
        <CallToAction />
        <Footer />
      </>
    );
  }
}
export default Home;
