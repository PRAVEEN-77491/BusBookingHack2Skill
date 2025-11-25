import React, { use } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/images.png";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 w-full h-[50px] bg-red-300 shadow flex items-center justify-between px-6 z-50">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-[35px] w-auto" />
        </div>

        <ul className="flex items-center gap-6">
          <li>
            <Link to="/home" className="hover:text-white ">
              Home
            </Link>
          </li>

          <div>
            <img
              src="https://avatar.iran.liara.run/public/42"
              alt="Profile"
              className="rounded-full h-[30px] w-[30px] cursor-pointer"
            />
          </div>
        </ul>
      </nav>
      <div className="pt-[50px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
