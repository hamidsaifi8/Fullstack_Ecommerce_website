import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="nav-container bg-white shadow-md text-black py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between  h-16">
            <div className="logo flex-shrink-0 font-medium font-roboto text-5xl text-green-700">
              Zay
            </div>
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-10 text-xl font-roboto font-light">
              <a href="#" className=" hover:text-green-600">
                Home
              </a>
              <a href="#" className=" hover:text-green-600">
                Products/Shop
              </a>
              <a href="#" className=" hover:text-green-600">
                About
              </a>
              <a href="#" className=" hover:text-green-600">
                Contact
              </a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="text-green-700 hover:text-green-600 focus:outline-none text-3xl "
                aria-label="Toggle menu"
              >
                {isOpen ? "X" : "☰"}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden text-lg bg-gray-300 shadow-lg text-green-700 px-10 space-y-2 py-4 text-center">
            <a
              href="#"
              className="block  hover:bg-green-600 hover:text-white hover:rounded"
            >
              Home
            </a>
            <a
              href="#"
              className="block hover:bg-green-600  hover:text-white hover:rounded "
            >
              Products/Shop
            </a>
            <a
              href="#"
              className="block hover:bg-green-600  hover:text-white hover:rounded"
            >
              About
            </a>
            <a
              href="#"
              className="block hover:bg-green-600  hover:text-white hover:rounded"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
