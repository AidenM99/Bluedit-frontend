import LogoText from "../../media/images/logo-text.webp";
import { FiSearch } from "react-icons/fi";
import { FaReddit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import Input from "../Inputs/Input";

const Navbar = () => {
  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center lg:px-4 px-2 h-12">
        <div className="flex items-center shrink-0">
          <Link to="/" className="flex items-center">
            <FaReddit className="fill-blue-500 lg:mr-2" size={34} />
            <img
              src={LogoText}
              alt="logo"
              className="h-8 mt-1 lg:inline-block hidden"
            ></img>
          </Link>
        </div>
        <div className="max-w-3xl w-full flex bg-gray-100 px-2 py-0.5 items-center rounded-full border border-gray-200 mx-4">
          <FiSearch size={33} className="px-1 text-gray-400" />
          <Input
            type={"search"}
            placeholder={"Search Bluedit"}
            styles={"w-full bg-gray-100 p-1 focus:outline-none placeholder:text-sm"}
          />
        </div>
        <div className="flex">
          <Link to="/log-in">
            <Button
              text={"Login"}
              type={"button"}
              styles={
                "rounded-full font-semibold py-1 px-4 border border-blue-500 hover:bg-blue-100 lg:w-32 w-auto min-w-max text-blue-500 lg:mr-2 mr-1"
              }
            />
          </Link>
          <Link to="/sign-up">
            <Button
              text={"Sign Up"}
              type={"button"}
              styles={
                "rounded-full font-semibold py-1 px-4 bg-blue-500 hover:bg-blue-600 lg:w-32 w-auto min-w-max text-white"
              }
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
