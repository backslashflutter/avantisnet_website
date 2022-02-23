import React from "react";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Notice from "../components/notices/Notice";
import { client } from ".././Client";

class NoticeList extends React.Component {
  state = {
    notices: [],
  };

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        this.setState({
          notices: response.items,
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <>
        <div>
          <NavBar />
        </div>
        <div className="flex justify-center items-center mt-8 w-full bg-white">
          <section className="bg-white-100 py-12">
            <div className="my-4 py-4">
              <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
                Notices
              </h2>
              <div className="flex justify-center">
                <div className="w-24 border-2 border-blue-900"></div>
              </div>
              <h2 className="mt-4 mx-12 text-center text-base md:text-xl lg:text-2xl font-semibold text-blue-900">
                Here are some important notices from AvantisNetwork.
              </h2>
            </div>
          </section>
        </div>
        <div className="px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {this.state.notices.map((notice) => (
              <Notice notice={notice} />
            ))}
          </div>
        </div>
        <div className="pb-10"></div>
        <Footer />
      </>
    );
  }
}

export default NoticeList;
