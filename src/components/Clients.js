import React from 'react';
import google from '../images/clients/google.png';
import facebook from '../images/clients/facebook.png';
import apple from '../images/clients/ibm.png';
import instagram from '../images/clients/instagram.png';

const clientImage = {
    height: "8rem",
    width: "auto",
}


const Clients = () => {
    return(
        <>
        <section className='mt-8 bg-gray-100' >
                <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Clients</h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-2 border-blue-900'></div>
                        </div>
                       </div>

                <div className="p-10">
                    <div className="grid sm:grid-cols-4 lg:grid-cols-4">
                        <div style={clientImage} className= "overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/6">
                            <img src={google} alt="client" />                            
                        </div>
                        <div style={clientImage} className= "overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/6">
                            <img src={facebook} alt="client" />                            
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/6">
                            <img src={apple} alt="client" />                            
                        </div> 

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/6">
                            <img src={instagram} alt="client" />                            
                        </div>

                                           
                    </div>
                </div>
            </section>
        </>
    );
}

export default Clients;
