import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const { id } = useParams();

  const navigate =useNavigate()

  

  // Fetch cart data from localStorage
  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCartItems(JSON.parse(cartData));
    }
  }, []);

  // Remove item from cart
  const handleRemoveItem = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      {cartItems.length > 0 ? (
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Your Shopping Cart
          </h1>
          <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item, index) => (
              <div 
                
                key={index}
                className="bg-white shadow rounded-lg overflow-hidden border cursor-pointer border-gray-200"
              >
                <img 
                  
                  src={item.image}
                  alt={item.title}
                  onClick={()=>navigate(`/${id}`)}
                  className="w-48 m-auto h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-700">
                    {item.title.slice(0, 60) + "..."}
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">
                    Price: <span className="font-bold text-gray-800">₹{item.price}</span>
                  </p>
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white text-sm uppercase font-medium px-4 py-2 rounded shadow"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center  bg-gray-50">
          <img
            className="w-64  h-auto mb-4"
            src="https://www.reliancedigital.in/build/client/images/emptycart.png"
            alt="Empty Cart"
          />
          <h1 className="text-xl font-medium text-gray-700 mb-4">
            Your Shopping Cart is Empty
          </h1>
          <button onClick={()=>navigate("/")} className="bg-red-500 hover:bg-red-600 text-white text-sm uppercase font-medium px-6 py-2 rounded shadow">
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
