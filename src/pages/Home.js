import React from "react";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Clients from "../components/OurClients";
import Portfolio from "../components/Portfolio";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import { client } from "../Client";
import Notices from "../components/notices/Notices";
class Home extends React.Component {
  state = {
    notices: [],
  };

  // all calls are made inside this
  componentDidMount() {
    client
      .getEntries({
        content_type: 'avantisNet',
        order: 'sys.createdAt'
      })
      .then((response) => {
        this.setState({
          notices: response.items,
        });
        console.log(response);
      })
      .catch(console.error);
  }

  render() {
    return (
      <>
        <Hero />
        <Intro />
        <Services />

        <Notices notices={this.state.notices} />
        <Clients />
        <Portfolio />
        <CallToAction />
        <Footer />
      </>
    );
  }
}
export default Home;
