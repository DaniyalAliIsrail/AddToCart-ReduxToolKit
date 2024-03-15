// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { getCartTotal } from "../features/cartSlice";

// const MyNavbar = () => {
//   const {cart } =useSelector((state)=> state.cartData)

//   const dispatch = useDispatch()
//   useEffect(()=>{
//     dispatch(getCartTotal());
//   },[cart])

//   return (
//     <>
//       <div className="w-[90%] mx-auto">
//         <div className="flex justify-between items-center border p-2 mt-3 rounded-full backdrop-blur-xl shadow-sm ">
//           <Link>
//           <div>Navbar</div>
//           </Link>
//           <Link to="/">
//           <div>All Product</div>
//           </Link>
//           <Link to="/Addcart">
//           <div>Cart : {cart.length} </div>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MyNavbar;




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
            <div>Cart : {cart.length} </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MyNavbar;

