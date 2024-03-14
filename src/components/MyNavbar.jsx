import React from "react";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between items-center border p-2 mt-3 rounded-full backdrop-blur-xl shadow-sm ">
          <Link>
          <div>Navbar</div>
          </Link>
          <Link to="/">
          <div>All Product</div>
          </Link>
          <Link to="/Addcart">
          <div>Cart : (0) </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MyNavbar;
