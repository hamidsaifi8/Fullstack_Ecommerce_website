import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { IoLocation, IoMailOutline } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="Footer-container sm:grid grid-cols-2 lg:grid-cols-3 bg-gray-800 text-white p-8 font-roboto font-light ">
        <div className="footer-left space-x-4 ml-8 px-4 my-4">
          <h2 className="font-medium text-3xl text-green-600 ">Zay Shop</h2>
          <hr className="border-1 border-gray-600 my-4" />
          <ul className="inline-block space-y-3 text-xl">
            <li>
              <a href="#" className="flex gap-2">
                <IoLocation size={25} />
                info@zayshop.com
              </a>
            </li>
            <li>
              <a href="#" className="flex gap-2">
                <FaPhoneFlip size={20} />
                011-01010236
              </a>
            </li>
            <li>
              <a href="#" className="flex gap-2 justify-center ">
                <IoMailOutline size={22} />
                Info@zayshop.com
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-middle space-x-4 ml-8 px-4 my-4">
          <h2 className="font-light text-3xl">Products</h2>
          <hr className="border-1 border-gray-600 my-4" />
          <ul className="inline-block space-y-3 text-xl">
            <li>
              <a href="#">Luxury</a>
            </li>
            <li>
              <a href="#">Sports Wear</a>
            </li>
            <li>
              <a href="#">Men's Shoes</a>
            </li>
            <li>
              <a href="#">Women's Shoes</a>
            </li>
            <li>
              <a href="#">Popular Dresses</a>
            </li>
            <li>
              <a href="#">Zym Accesssories</a>
            </li>
          </ul>
        </div>

        <div className="footer-right space-x-4 ml-8 px-4 my-4">
          <h2 className="font-light text-3xl">Further Info</h2>
          <hr className="border-1 border-gray-600 my-4" />
          <ul className="space-y-3 text-xl">
            <li>
              <a href="#" target="_blank">
                Home
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                About Us
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Shop Locations
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="Footer-divider bg-gray-800 text-gray-600 p-3 px-12">
        <hr />
      </div>

      <div className="Footer-bottom bg-gray-800 text-white p-4 flex sm:grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
        <div className="footer-left">
          <ul className="flex space-x-6 px-2 text-3xl ml-12">
            <li>
              <a href="https://www.facebook.com/login.php/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="x" />
              </a>
            </li>

            <li>
              <a href="https://github.com/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="x" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="x" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="x" />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-right ml-auto pr-10 flex">
          <input
            className="border-2 border-gray-600 px-4 py-2 rounded-l-sm"
            type="email"
            placeholder="Email"
          />
          <button className="border-2 border-green-700 px-2 bg-green-700 rounded-r-sm">
            Subscribe
          </button>
        </div>
      </div>
      <div className="header-bottom bg-gray-900 text-white py-6 block px-14 font=roboto font-light text-lg text-center">
        Copyright &copy; 2025 ZayShop. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
