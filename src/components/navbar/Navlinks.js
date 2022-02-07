import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

const NavLinks = () => {
    return(
        <>
            <HashLink className='px-4 ml-0 mr-0 font-semibold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600' smooth to="/#hero">
                Home
            </HashLink>
            <HashLink className='px-4 ml-0 mr-0 font-semibold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600' smooth to="/#about-us">
                About Us
            </HashLink>

            <HashLink className='px-4 ml-0 mr-0 font-semibold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600' smooth to="/#services">
                Services
            </HashLink>
            <HashLink className='px-4 ml-0 mr-0 font-semibold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600' smooth to="/#testimonials">
               Testimonials
            </HashLink>

            <HashLink className='bg-blue-800 px-3 ml-0 mr-0 font-medium duration-100 md:ml-12 md:mr-3 text-white text-base lg:mr-8 transition-color hover:text-white rounded-xl  w-full  py-3 my-4 text-lg shadow-xl rounded-xl sm:w-auto sm:mb-0' smooth to="/contact">
                Contact Us
            </HashLink>



        </>
    )
}


export default NavLinks;



