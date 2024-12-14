import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { FaHome } from "react-icons/fa";
import { PiGreaterThan } from "react-icons/pi";
import { FaShareSquare } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { BsFillTagFill } from "react-icons/bs";
import { FaRegCalendarCheck } from "react-icons/fa6";

function ProductDetails() {
  const { id } = useParams();
  const navigate=useNavigate()

  const [data, setData] = useState([]);

  const fetchData = async (id) => {
    const res = await fetch(
      `https://server-ecommerce-h2f9.onrender.com/products/${id}`
    );
    const finalRes = await res.json();
    console.log(finalRes);
    setData(finalRes);
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  // Add to cart function
  const addToCart = () => {
    const product = {
      id: data.id,
      title: data.title,
      price: data.mrp,
      image: data.image,
    };

    // Get the existing cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already exists in the cart
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (!isProductInCart) {
      // Add product to the cart
      cart.push(product);

      // Save the updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      alert("Product added to cart!");
      return navigate('/cart')
      
    } else {
      alert("Product is already in the cart!");
    }
  };

  return (
    <>
      <div className="text-[12px] px-1.5 text-[#333333] bg-[#F9F9FA]">
        <span className="flex items-center">
          <FaHome className="text-2xl px-1" /> <PiGreaterThan /> Heater{" "}
          <PiGreaterThan /> Water Heaters <PiGreaterThan /> Havells{" "}
          <PiGreaterThan />
          {data.title}
        </span>
      </div>

      <div className="flex  border-y-[4px]  ">
        <div className="border-r-[4px] w-[40%] ">
          <img className="m-auto mt-4 w-[320px]" src={data.image} alt="" />
        </div>

        <div className="w-[60%]">
          <div className="border-b-[4px] pl-4 py-5 ">
            <h1 className="text-[20px] text-[#333333] font-semibold">
              {data.title}
            </h1>
            <div className="flex items-center pt-2 gap-5 text-[#003380] ">
              <p className="text-[#FFA41C] text-[16px]">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                <span className="text-[#083680] text-sm pl-1 font-semibold">
                  ({data.rating_review})
                </span>
              </p>
              <span className="flex items-center gap-1 text-sm">
                <input type="checkbox" name="" id="" />
                Add to Compare
              </span>
              <span className="flex items-center gap-1">
                <FaShareSquare />
                Share
              </span>
              <span className="flex items-center gap-1">
                <FaPrint />
                Print
              </span>
            </div>
          </div>

          <div className="flex px-2">
            <div className=" border-r-[2px] text-[#585757]">
              <h1 className="text-[#4C4C4C] font-bold py-4">
                Gain more with offers (1)
              </h1>
              <p className="flex items-center text-[15px] p-2">
                <BsFillTagFill className="text-green-700 text-[24px] pr-1" />
                RS.4000 Instant Discount on ICICI, Kotak and SBI CC and ICICI
                DC. TnC Apply*
                <span className="text-[#003380]hover:underline hover:text-blue-600">
                  Read-T&C
                </span>
              </p>
              <h1 className="text-[#4C4C4C] font-bold py-2">
                Save more with EMI/Cashback (5)
                <span className="text-[#003380] font-normal hover:underline hover:text-blue-600">
                  Read-T&C
                </span>
              </h1>
              <div className="text-[15px]">
                <p className="flex items-center p-1">
                  <FaRegCalendarCheck className="text-green-700  text-[20px] pr-1 " />
                  Credit Card No-Cost EMI Options.
                  <span className="text-[#003380] hover:underline hover:text-blue-600">
                    View-Plans
                  </span>
                </p>
                <p className="flex items-center p-1">
                  <FaRegCalendarCheck className="text-green-700  text-[20px] pr-1" />
                  Debit Card No-Cost EMI Options.
                  <span className="text-[#003380] hover:underline hover:text-blue-600">
                    View-Plans
                  </span>
                </p>
                <p className="flex items-center p-1">
                  <FaRegCalendarCheck className="text-green-700 text-[20px] pr-1" />
                  Credit Card Low-Cost EMI Options.
                  <span className="text-[#003380] hover:underline hover:text-blue-600">
                    View-Plans
                  </span>
                </p>
              </div>
              <button className="text-[#073680] text-[12px] mb-6 mt-4 font-semibold px-2 py-1 uppercase bg-[#DDEDFB]">
                See More <i className="fa-solid fa-angle-down"></i>
              </button>

              <div className="">
                <h1 className="text-[#4C4C4C] font-bold">Return Policy</h1>
                <li className="text-[15px] p-2">
                  For return eligibility. <span>Read-T&C</span>
                </li>
                <li className="text-[15px] p-2">
                  All accessories, product & packaging need to be returned in
                  original condition.
                </li>

                <p className="text-[#4C4C4C] font-bold py-4">
                  Got Feedback to share on this page?
                  <span className="text-[#073680] hover:underline hover:text-blue-600">
                    report here.
                  </span>
                </p>
              </div>
            </div>
            <div className="text-[#585757] px-2">
              <h1 className=" pt-4">
                MRP :
                <span className="text-[#003380] text-2xl">{data.mrp}</span>{" "}
                <span> (Inclusive of all taxes)</span>
              </h1>
              <h2 className="text-[#43A047] text-[14px] py-1 font-semibold">You Save: { data.save}</h2>
              <p className=" py-2 text-black">EMIs (Credit Cards) from ₹3873.7/month |<span className="text-[#003380] hover:underline hover:text-blue-600">
                    View-Plans
                  </span></p>
              <h1 className="text-[17px] text-black font-bold py-2">
                FREE Shipping!
              </h1>
              <input
                className="border-[1px] p-2 rounded-sm w-[300px] my-4"
                type="text"
                placeholder="Enter/Detect PIN Code"
              />
              <div className="flex items-center gap-2 py-4">
                <button
                  onClick={addToCart}
                  className="uppercase text-white text-[18px]  px-4 py-2 font-semibold rounded bg-[#E42529] hover:bg-[#122E91]"
                >
                  Add to cart
                </button>
                <button className="uppercase text-[17px]  px-8 py-2 font-semibold rounded text-white bg-[#FC6027]">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
