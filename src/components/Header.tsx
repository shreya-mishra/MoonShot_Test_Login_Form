import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container flex items-center justify-between">
        {/* First line with logo and navigation */}
        <h1 className="logo text-3xl font-bold">Ecommerce</h1>
        <nav className="navigation">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Sale
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Clearance
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                New Stock
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Trending
              </a>
            </li>
          </ul>
        </nav>

        {/* Second line with call to action */}
      </div>
      <div className="cta">
        <a
          href="#"
          className="bg-#A4A4A4-500 flex items-center justify-center rounded-md px-4 py-2 text-gray-700 hover:bg-gray-600"
        >
          <span className="text-black-700 mr-2">&lt;</span>
          10% off on business sign up
          <span className="ml-2">&gt;</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
