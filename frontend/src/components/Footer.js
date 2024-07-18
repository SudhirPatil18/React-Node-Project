import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap text-1xl">
          <div className="w-full md:w-1/4 px-4">
            <h3 className="text-black text-lg font-semibold mb-8 hover:underline hover:text-2xl">company</h3>
            <ul className="mb-8">
              <li><a href="#" className="text-black hover:text-2xl ">About Us</a></li>
              <li><a href="#" className="text-black hover:text-2xl ">our services</a></li>
              <li><a href="#" className="text-black hover:text-2xl ">privacy policy</a></li>
              <li><a href="#" className="text-black hover:text-2xl ">affiliate program</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <h4 className="text-black text-lg font-semibold mb-8">get help</h4>
            <ul className="mb-8">
              <li><a href="#" className="text-black hover:text-2xl ">FAQ</a></li>
              <li><a href="#" className="text-black hover:text-2xl ">shipping</a></li>
              <li><a href="#" className="text-black hover:text-2xl ">returns</a></li>
              <li><a href="#" className="text-black hover:text-2xl ">order status</a></li>
              <li><a href="#" className="text-black hover:text-2xl ">payment options</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <h3 className="text-black text-lg font-semibold mb-8 hover:underline hover:text-2xl">online shop</h3>
            <ul className="mb-8">
              <li><a href="#" className="text-black hover:text-2xl ">watch</a></li>
              <li><a href="#" className="text-black hover:text-2xl ">bag</a></li>
              <li><a href="#" className="text-black hover:text-2xl ">shoes</a></li>
              <li><a href="#" className="text-black hover:text-2xl ">dress</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <h3 className="text-black text-lg font-semibold mb-8 hover:underline hover:text-2xl">follow us</h3>
            <div className="mb-8 flex flex-row">
              <a href="#" className="inline-block h-12 w-12 bg-gray-300 text-black rounded-full flex items-center justify-center mr-4 hover:bg-red-500 transition-colors duration-300"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="inline-block h-12 w-12 bg-gray-300 text-black rounded-full flex items-center justify-center mr-4  hover:bg-red-500 transition-colors duration-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="inline-block h-12 w-12 bg-gray-300 text-black rounded-full flex items-center justify-center mr-4  hover:bg-red-500 transition-colors duration-300"><i className="fab fa-instagram"></i></a>
              <a href="#" className="inline-block h-12 w-12 bg-gray-300 text-black rounded-full flex items-center justify-center mr-4  hover:bg-red-500 transition-colors duration-300"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <hr className="border-black border-2 my-8 md:my-12" />
        <div className="text-center">
          <p className="text-black text-sm">&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
