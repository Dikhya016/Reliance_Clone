import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";

function ViewAll() {
  const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [originalProducts, setOriginalProducts] = useState([]);
  const [pages, setPages] = useState(1);

  

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        `https://server-ecommerce-h2f9.onrender.com/products`
      );
      const finalRes = await res.json();
      // console.log(finalRes);
        setProducts(finalRes);
        setOriginalProducts(finalRes)
    } catch (error) {
      console.log(error);
    }
    };
    
    //sorting

  const parsePrice = (price) => {
    return Number(price.replace(/[^0-9.]/g, "")); // Removes ₹, commas, etc.
  };

  const copyData = [...products];
  const descHandle = () => {
    const sortedProducts = copyData.sort(
      (a, b) => parsePrice(b.price) - parsePrice(a.price) 
    );
    setProducts(sortedProducts);
  };

  const ascHandle = () => {
    const sortedProducts = copyData.sort(
      (a, b) => parsePrice(a.price) - parsePrice(b.price)
    );
    setProducts(sortedProducts);
    };
    
    const defaultPro = () => {
        setProducts(originalProducts)
    }

    //pagination

    const itemsPerPage = 12;
    const paginatedData = products.slice((pages - 1) * itemsPerPage, pages * itemsPerPage);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="px-10 bg-[#F5F7F7] py-10">
        <div className="flex items-center justify-end gap-10  bg-white mb-4 py-5 pr-10">
          <h1 className="font-semibold">Sort By:</h1>
          <button onClick={defaultPro}  className="border-[#008000] border-[1px] text-sm rounded-lg text-[#008000] px-2 py-1">
            Relevance
          </button>
          <button
            onClick={ascHandle}
            className=" px-2 py-1 border-[#EDEEF0] bg-[#F5F7F7] rounded-md text-[#333333]"
          >
            Price(Low-High)
          </button>
          <button
            onClick={descHandle}
            className="px-2 py-1 border-[#EDEEF0] bg-[#F5F7F7] rounded-md text-[#333333]"
          >
            Price(High-Low)
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4 bg-[#F5F7F7] ">
          {paginatedData.map((pro, ind) => (
            <div
              onClick={() => navigate(`/${pro.id}`)}
              key={ind}
              className="bg-white border-[#E5E5E5] border-[1px] pt-6"
            >
              <img
                className="w-[180px] h-[180px] m-auto pb-4 transition-transform duration-300 hover:scale-110"
                src={pro.image}
                alt=""
              />
              <h1 className="text-[#0059B5] px-4 text-[16px] hover:text-[#E42529]">
                {pro.title.slice(0, 60) + "..."}
              </h1>
              <p className="text-sm py-2 px-4">
                <span className="text-[#0059B5] font-semibold">
                  {pro.price}
                </span>{" "}
                <span className="line-through text-[#666666]">{pro.mrp}</span>{" "}
                <span className="text-[#31812E]">{pro.save}</span>
              </p>

              <div className="flex justify-around  items-center border-t-[1px] text-[#666666] ">
                <h1 className="flex items-center border-r-2 pr-6 py-2 gap-2">
                  <input
                    className="w-[18px] h-[18px]"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  Compare
                </h1>
                <h1 className="flex items-center gap-2 -ml-8 ">
                  <IoMdHeartEmpty className="text-2xl" />
                  Wishlist
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 my-4">
  <button
    onClick={() => setPages(pages - 1)}
    disabled={pages <= 1}
    className={`px-4 py-2  rounded ${pages <= 1 ? "bg-gray-300 rounded-[50%] " : " text-black rounded-[50%] "}`}
  >
    <FaLessThan />
  </button>
  {[...Array(Math.ceil(products.length / itemsPerPage))].map((_, i) => (
    <button
      key={i}
      onClick={() => setPages(i + 1)}
      className={`px-4 py-2 border ${
        pages === i + 1
          ? "bg-[#003380] rounded-[50%] text-white text-bold"
          : "text-black border-none font-bold"
      }`}
    >
      {i + 1}
    </button>
  ))}
  <button
    onClick={() => setPages(pages + 1)}
    disabled={pages * itemsPerPage >= products.length}
    className={`px-4 py-2 ${
      pages * itemsPerPage >= products.length
        ? "bg-gray-300 rounded-[50%] "
        : " text-black rounded-[50%] "
    }`}
  >
    <FaGreaterThan />
  </button>
</div>

    </>
  );
}

export default ViewAll;
