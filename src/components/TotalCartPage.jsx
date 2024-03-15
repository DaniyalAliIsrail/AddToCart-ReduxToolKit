import { useDispatch, useSelector } from "react-redux";
import { getCartTotal ,removeItem ,  increaseItemQuantity, removeItemQuantity} from "../features/cartSlice";

const TotalCartPage = () => {
  const {cart , totalPrice , totalQuantity  } = useSelector((state)=>{
    return state.cartData
  })
  console.log(cart);
  console.log(totalPrice);
  console.log(totalQuantity);
  
  const dispatch = useDispatch()
  dispatch(getCartTotal())

  return <>
  <div className="bg-gray-100 h-screen py-8">
  <div className="container mx-auto px-4">
    <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-3/4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left font-semibold">Product</th>
                <th className="text-left font-semibold">Price</th>
                <th className="text-left font-semibold">Quantity</th>
              </tr>
            </thead>
            <tbody>
            {
                cart.map((item)=>(
                  <tr key={item.id}>
                  <td  className="py-4">
                    <div className="flex items-center">
                      <img
                        className="h-16 w-16 mr-4"
                        src={item.img}
                        alt="Product image"
                      />
                      
                      <div className="font-semibold">{item.title}</div>
                      
                    </div>
                  </td>
                  <td className="py-4">{item.price}$</td>
                  <td className="py-4">
                    <div className="flex items-center">
                      <button onClick={()=> dispatch(removeItemQuantity(item.id))} className="border rounded-md py-2 px-4 mr-2">
                        -
                      </button>
                      <span className="text-center w-8">{item.quantity}</span>
                      <button onClick={()=> dispatch(increaseItemQuantity(item.id))} className="border rounded-md py-2 px-4 ml-2">
                        +
                      </button>
                    </div>
                  </td>
                  

                  <td className=" text-red-600 py-4" onClick={()=> dispatch(removeItem(item.id))} >remove</td>
                </tr>
                ))
              }
             
              {/* More product rows */}
              
            </tbody>
          </table>
        </div>
      </div>
      <div className="md:w-1/4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Total Quantity</span>
            <span>{totalQuantity}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Total Amount</span>
            <span>{totalPrice}</span>
          </div>
         
          <hr className="my-2" />
          
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  </>;
};

export default TotalCartPage;
