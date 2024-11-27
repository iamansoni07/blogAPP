import logo from "../imgs/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="flex-none w-10">
        <img src={logo} className="w-full" />
      </Link>

      <div className="absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw]">
                                hiiiiiii

      </div>
    </nav>
  );
};

export default Navbar;
