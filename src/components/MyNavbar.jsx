
import { FaShoppingCart } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MyNavbar = () => {
  const { cart } = useSelector((state) => state.cartData);

  return (
    <>
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between items-center border p-2 mt-3 rounded-full backdrop-blur-xl shadow-sm">
          <Link to="/">
            <div>Navbar</div>
          </Link>
          <Link to="/">
            <div>All Product</div>
          </Link>
          <Link to="/Addcart">
            <div className="flex justify-between item-center w-10"> 
            <span className="font-semibold"><FaShoppingCart /></span>: <span className="font-semibold"> {cart.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MyNavbar;

