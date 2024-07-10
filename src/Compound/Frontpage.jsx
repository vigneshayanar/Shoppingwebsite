import React from "react";
import ecomm from "../assets/ecomm.jpg";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbBrandDaysCounter } from "react-icons/tb";
import { MdHighQuality } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Frontpage = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${ecomm})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          width: "100%",
        }}
        className="flex items-center text-center contrast-100 relative"
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-inner text-white uppercase ml-20">
          <h1 className="text-4xl font-bold">Your products are great</h1>
          <button className="bg-gray-500 text-white px-4 py-2 mt-5 uppercase hover:bg-gray-600 transition duration-300 ease-in-out">
          <Link to="home/"> Shop products</Link> 
          </button>
        </div>
      </div>
      <div className="flex justify-around gap-5 mt-10 mx-8">
        <div className="text-center flex flex-col items-center">
          <CiDeliveryTruck className="text-4xl mb-2" />
          <p className="font-bold uppercase text-lg">Free Delivery</p>
          <p className="text-gray-400">Enjoy free delivery on all orders above $50.</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <TbBrandDaysCounter className="text-4xl mb-2" />
          <p className="font-bold uppercase text-lg">24/7 Support</p>
          <p className="text-gray-400">Our support team is here to help you around the clock.</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <MdHighQuality className="text-4xl mb-2" />
          <p className="font-bold uppercase text-lg">Quality Products</p>
          <p className="text-gray-400">We ensure the best quality products for our customers.</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <GiReturnArrow className="text-4xl mb-2" />
          <p className="font-bold uppercase text-lg">Easy Returns</p>
          <p className="text-gray-400">Hassle-free returns within 30 days of purchase.</p>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
