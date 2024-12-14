import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// Custom Previous Arrow
const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: "relative",
      background: "white",
      zIndex: 1,
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      height: "100px",
      width: "30px",
      left: "-50px",
    }}
    onClick={onClick}
  >
    <FiChevronLeft className="h-10 w-10 absolute -right-2 top-8  text-black" />
  </div>
);

// Custom Next Arrow
const NextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: "relative",
      background: "white",
      zIndex: 1,
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      height: "100px",
      width: "30px",
      left: "1160px",
      marginLeft: "60px",
    }}
    onClick={onClick}
  >
    <FiChevronRight className="h-10 w-10 absolute -left-1 bottom-8 text-black" />
  </div>
);

function ShowProducts({ data, heading }) {
   const navigate=useNavigate()

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
    <>
      <div className="bg-[#FAFAFA]  mt-2">
        <div className="flex items-center justify-start gap-2 p-5 ">
          <h1 className="font-semibold text-[#333333]">
            {heading}
          </h1>
          <button className="bg-[#003380] text-white pt-1 pb-1 pl-3 pr-3 text-[12px]" onClick={()=>navigate('/all_products')} >
            View all
          </button>
        </div>
        <div className="bg-white  px-[2em] pt-4 pb-10 pl-20 pr-20  ">
          <Slider {...settings}>
            {data.map((pro) => (
              
              <div onClick={()=>navigate(`/${pro.id}`)}  key={pro.id} className=" w-[237px] cursor-pointer " >
                <img
                  className="transition-transform w-[180px] h-[180px] m-auto  duration-300 hover:scale-110"
                  src={pro.image}
                  alt=""
                />
                <h2 className="text-[#033581] pt-4 text-[14px] font-semibold pb-2">
                  {pro.title.slice(0, 60)}
                </h2>
                <p className="text-[14px] text-[#696969]">
                  Deal Price: <b className="text-black">{pro.price}</b>
                </p>
                <p className="text-[14px] text-[#696969]">
                  M.R.P: <span className="line-through"> {pro.mrp}</span>{" "}
                </p>
                <p className="text-[14px] text-[#696969]">
                  You save: {pro.save}
                </p>
                <p className="text-[#FFA41C] text-[14px]">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ShowProducts;
