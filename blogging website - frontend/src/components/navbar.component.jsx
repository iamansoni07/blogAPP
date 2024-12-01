import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";

const Navbar = () => {
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="flex-none w-10">
        <img src={logo} className="w-full" />
      </Link>

      <div
        className="absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw]
                      md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto"
      >
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-grey p-4 pl-6 pr-[12%] rounded-full placeholder:text-dark-grey
                     md:w-auto, md:pr-6, md:pl-12"
        />
        <i
          className="fi fi-rr-search absolute right-[10%] top-1/2 -translate-y-1/2 text-xl text-dark-grey
                     md:pointer-events-none md:left-5"
        ></i>
      </div>

      {/* <div className="flex items-center gap-3 ml-auto">
        <button className="bg-grey w-12 h-12 rounded-full flex items-center justify-center">
          <i className="fi fi-rr-search text-xl"></i>
        </button>
      </div> */}

      {/* <div className="flex items-center md:gap-6 ml-auto">
        <button className="md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center">
          <i className="fi fi-rr-search text-xl"></i>
        </button>
      </div> */}

      {/* <div className="flex items-center gap-3 md:gap-6 ml-auto">
        <button className="bg-grey w-12 h-12 rounded-full flex items-center justify-center md:hidden">
          <i className="fi fi-rr-search text-xl"></i>
        </button>
      </div> */}

      <div className="flex items-center gap-3 md:gap-6 ml-auto">
        <button
          className="md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center"
          onClick={() => setSearchBoxVisibility((currentVal) => !currentVal)}
        >
          <i className="fi fi-rr-search text-xl"></i>
        </button>
      </div>
      
    </nav>
  );
};

export default Navbar;
