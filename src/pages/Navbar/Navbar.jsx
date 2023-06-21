import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaArrowDown } from "react-icons/fa";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(index === activeDropdown ? null : index);
  };

  const isDropdownOpen = (index) => {
    return index === activeDropdown;
  };

  const links = [
    { name: "Home", submenu: ["Home 1", "Home 2", "Home 3"] },
    { name: "Features", submenu: ["Feature 1", "Feature 2", "Feature 3"] },
    {
      name: "Departments",
      submenu: ["Department 1", "Department 2", "Department 3"],
    },
    { name: "Events", submenu: ["Event 1", "Event 2", "Event 3"] },
  ];

  return (
    <nav className="bg-gray-800">
      <div className="px-4 sm:px-6 lg:px-[70px] py-[24.5px]">
        <div className="flex justify-between gap-10 h-16">
          <div className="flex items-center">
            <img className="h-8 w-8" src={logo} alt="Logo" />
            <span className="text-error text-3xl font-semibold">
              Doctor Guide
            </span>
          </div>
          <div className="flex items-center gap-[70px]">
            <div className="flex">
              {links.map((link, index) => (
                <div className="relative" key={index}>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  >
                    {link.name}
                    <FaArrowDown className="ml-1" />
                  </button>
                  {isDropdownOpen(index) && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                      {link.submenu.map((item, itemIndex) => (
                        <Link
                          to={`/${item.toLowerCase().replace(" ", "")}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          key={itemIndex}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Us
              </Link>
            </div>
            <div className="ml-auto gap-4">
              <Link
                to="/login"
                className="btn btn-error text-white"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn btn-error ml-5 text-white"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
      {activeDropdown !== null && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links[activeDropdown].submenu.map((item, itemIndex) => (
              <Link
                to={`/${item.toLowerCase().replace(" ", "")}`}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                key={itemIndex}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
