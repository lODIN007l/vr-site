import React from "react";
import Logo from "../assets/img/logo.svg";
import Nav from "./Nav";
//icononos
import { HiMenu } from "react-icons/hi";

const Header = ({ setNavegar }) => {
  return (
    <header className="py-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo */}
          <a href="">
            <img className="h-[30px]" src={Logo} />
          </a>
          {/* nav */}
          <Nav />
          <HiMenu
            onClick={() => setNavegar(true)}
            className="lg:hidden text-3xl text-white cursor-pointer "
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
