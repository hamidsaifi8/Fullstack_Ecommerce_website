import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="nav-container bg-white text-black">
        <nav className="navbar-2 ">
          <ul className="flex h-16 text-xl font-roboto font-light items-center justify-evenly space-x-24 ml-3 ">
            <li className="logo font-medium font-roboto text-5xl text-green-700">
              Zay
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products/Shop</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
