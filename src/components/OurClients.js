import React from "react";
import client_logo_1 from "../images/clients/client_logo_1.png";
import client_logo_2 from "../images/clients/client_logo_2.png";

const clientImage = {
  height: "8rem",
  width: "auto",
};

const Clients = () => {
  return (
    <>
      <section className="mt-8 ">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Our Clients
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-2 border-blue-900"></div>
          </div>
        </div>

        <div className="p-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2">
            <a href="https://www.hankooktire.com/">
              <div
                style={clientImage}
                className="overflow-hidden flex justify-center transition-all ease-in-out  hover:opacity-100 opacity-60 w-1/6"
              >
                <img src={client_logo_1} alt="client" />
              </div>
            </a>
            <a href="https://www.nalox.ca/index.php">
              <div
                style={clientImage}
                className="overflow-hidden flex justify-center transition-all ease-in-out  hover:opacity-100 opacity-60"
              >
                <img src={client_logo_2} alt="client" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
