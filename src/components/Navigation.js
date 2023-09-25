import React from "react";
import Logo from "../img/Logo.png"
const Navigation = () => {
  return (
    <header className="absolute top-0 w-full mt-4 bg-transparent ">
      <nav className="" role="navigation">
        <div className="flex flex-wrap md:flex-no-wrap mx-[56px]">
          <div className="">
            <a href="/">
                <img src={Logo} alt="logo"/>
            </a>
          </div>

          <div className="ml-auto md:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded"
              type="button"
            >
              <svg
                className="w-3 h-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">
            <ul className="flex flex-col pt-4 mt-4 -mx-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:ml-auto md:border-0">
              <li>
                <a href="/" className="block px-4 py-1 md:p-2 lg:px-8">
                  Home
                </a>
              </li>
              <li>
                <a href="/blog" className="block px-4 py-1 md:p-2 lg:px-8">
                  Blog
                </a>
              </li>
              <li>
                <a href="/about" className="block px-4 py-1 md:p-2 lg:px-8">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
