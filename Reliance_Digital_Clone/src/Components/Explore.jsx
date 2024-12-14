import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {useNavigate} from 'react-router-dom'

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

function Explore() {

  const navigate =useNavigate()
  const data = [
    {
      img: "https://www.reliancedigital.in/medias/Apple-Logo.png?context=bWFzdGVyfGltYWdlc3w4MjQ4fGltYWdlL3BuZ3xpbWFnZXMvaGQ3L2hmOS8xMDAyMjUyNjcxMzg4Ni5wbmd8NzUwMzQzNmYwMjJhNGI3MWQ2Y2Y3YTlmNDMwNzRiMmE2MjIzZjRlODlkMjUzZGVjZjdlYjViZWQ3MWVlY2IxNw",
      title: "Apple Store",
    },
    {
      img: "https://www.reliancedigital.in/medias/Google-241018.png?context=bWFzdGVyfGltYWdlc3w2OTgwfGltYWdlL3BuZ3xpbWFnZXMvaDNjL2gxZC8xMDIxMDM2NzgzMjA5NC5wbmd8YTJkM2FlMzc3OGVkOWMzZTdhYWEzYjYzZDk5YTUzZjRhZDVjMjBiYmY2ZWU5YzdkMzQ5NTcyYTI5YTIyM2ViMg",
      title: "Pixel Store ",
    },
    {
      img: "https://www.reliancedigital.in/medias/Dyson-Logo.png?context=bWFzdGVyfGltYWdlc3w3NTYyfGltYWdlL3BuZ3xpbWFnZXMvaDQwL2g4MC8xMDE0MzQ4MjExODE3NC5wbmd8ZjdmMzhhYWY2MmJkNDdkNzVmODdiNWEwMjJhNmUwOTkyNDNkMDM0NDFlMWVkNDFhOGYxOTBhYjRhNjZiYjllMA",
      title: "Dyson Store",
    },
    {
      img: "https://www.reliancedigital.in/medias/Speaker-Headset-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyNzUzN3xpbWFnZS9wbmd8aW1hZ2VzL2g1YS9oODAvOTI1MTA1MDY4NDQ0Ni5wbmd8YmMyYWJiNzRhMzk4NjMxMDRmOWRlZGI1MzVjZDk2Y2IxYTkxOGNlNjlmZjA2YTgwMGIwMjhmYTJlYmNhYjIwOA",
      title: "Speakers & Headsets",
    },
    {
      img: "https://www.reliancedigital.in/medias/iphone-pro-11-01.png?context=bWFzdGVyfGltYWdlc3wyOTc3NnxpbWFnZS9wbmd8aW1hZ2VzL2gxNi9oNWUvOTI3NjA1OTkxMDE3NC5wbmd8MzdkYzljODgzMDcyM2ZjMjJmZDI2ZjMwNjhkZmU5YjFmOTJmMGRmOTFiYzc4ZjcyMDRhMjQ5MWMyNjYwOTgxYg",
      title: "Smartphones",
    },
    {
      img: "https://www.reliancedigital.in/medias/Explore-Our-Range-of-Products-AC.png?context=bWFzdGVyfGltYWdlc3wxNzI3NnxpbWFnZS9wbmd8aW1hZ2VzL2hmMy9oNDMvOTg5MjQwNzQ0MzQ4Ni5wbmd8ODkxZDlkYTUxODhkM2RiOWUzMTU4ZDZhYmVkYTM3MzE2MDEyNDEzODMzNWZlZWQ5ZDQwMzNmMWM1OTliZGYwZA",
      title: "Air Conditioners",
    },
    {
      img: "https://www.reliancedigital.in/medias/TV-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0OTM4M3xpbWFnZS9wbmd8aW1hZ2VzL2g1ZC9oMTEvOTI1MTA1MDU1MzM3NC5wbmd8MThiNmU4NTZiNWI5MTE1ZGVjYjA4ZjIwM2QwZjUyMzFlOGExZTY0YmQ0MTRkYTkyN2M2MDZiYzUzZDY1ZjM4Ng",
      title: "Televisions",
    },
    {
      img: "https://www.reliancedigital.in/medias/Mixer-Explore.png?context=bWFzdGVyfGltYWdlc3wyMTk1MnxpbWFnZS9wbmd8aW1hZ2VzL2gzZi9oODcvMTAwMTE0MDU2NDc5MDIucG5nfGJjOWNlM2FkZGUxMWE1ODIyZmNjNWJiNDU1NjI4ODQyYWM1M2Q3ZWU3NDU5YTgyZjFiN2JjNmJhOGI1YzUwMDE",
      title: "Mixture Grinders",
    },
    {
      img: "https://www.reliancedigital.in/medias/Watch-180x180-27-02-2020.png?context=bWFzdGVyfGltYWdlc3w2Njk2fGltYWdlL3BuZ3xpbWFnZXMvaGQ1L2g2My85MjUzNTA3NTk2MzE4LnBuZ3w4NmEwODU5NDI5YzVlMzJjNzRlNzNlYmJkMmJmYTZjMTI2OWY0YTUxYWU3YzMzM2E3YTc5YjljZmU4ZGMyNGQ2",
      title: "Smart Wearables",
    },
    {
      img: "https://www.reliancedigital.in/medias/Laptop-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyOTAwOXxpbWFnZS9wbmd8aW1hZ2VzL2g0Mi9oNTYvOTI1MTA1MDYxODkxMC5wbmd8N2ZjYTg0ZDAyOTZmMmQ5OTZhZDNiM2M4NDg0ZDgxY2UyNzNjMmJiYzMwZTZiOGQwOWE5N2JlZDI4M2ViMGZjNw",
      title: "Laptops",
    },
    {
      img: "https://www.reliancedigital.in/medias/Explore-Our-Range-of-Products-Ref.png?context=bWFzdGVyfGltYWdlc3wxNDQwMXxpbWFnZS9wbmd8aW1hZ2VzL2hlZC9oMjQvOTg5MjQwNzUwOTAyMi5wbmd8NTc5ZWE5ZGEzYTYzODYwNDNlNTRhNjExZjcyZGI4NzQ1YmE0NDVjYmUwY2M3MzRiZjFkMWZmNDY3NTMxYjNkMA",
      title: "Refrigerators",
    },
    {
      img: "https://www.reliancedigital.in/medias/Explore-Our-Range-of-Products-Speakers-Soundbars.png?context=bWFzdGVyfGltYWdlc3w5NDU5fGltYWdlL3BuZ3xpbWFnZXMvaGFiL2gyOS85OTg0Nzg3OTA2NTkwLnBuZ3xiODAxZmFmY2M1ZGI5YjE3YzhlY2I5MmI0NjNhZDkyOGY2NWFjM2I5YTU1NGZhOTFhNzQ1NTZhN2ZhMTcwNzFh",
      title: "Speakers & Soundbars",
    },
    {
      img: "https://www.reliancedigital.in/medias/Microwave-Explore-HP-Section-Icon.png?context=bWFzdGVyfGltYWdlc3wyODgwM3xpbWFnZS9wbmd8aW1hZ2VzL2gyOS9oODUvMTAwNTY5NjAxNDc0ODYucG5nfGQ3ZTZjNTExZWFmZDkyN2Q2Y2M0N2NkMWRlZGUwYWFmZjQzZGNlMDc1YjIyMjY5NmE1NGZmNzk1YzU1YzQxNDc",
      title: "Microwave Ovens",
    },
    {
      img: "https://www.reliancedigital.in/medias/Washing-Machine-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wzNDU4MXxpbWFnZS9wbmd8aW1hZ2VzL2gzOC9oM2UvOTI1MTA1MDg4MTA1NC5wbmd8ZDAyZGNkMzU1MzE3N2E2OGFlOTliMzUyODZkYzlkNTc0NzFmODllY2JiZDVlNzdhYjg3MTgyMTc4ZGVhODA3ZA",
      title: "Washing Mechines",
    },
    {
      img: "https://www.reliancedigital.in/medias/Camera-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0MzE0OHxpbWFnZS9wbmd8aW1hZ2VzL2gzNi9oMGMvOTI1MTA1MDc0OTk4Mi5wbmd8NDMxMGMyNjg2M2I3ZDFhOTc4YjkzMTNhYWM1ZmU5YzRlMjc3Mzg4MDcxOTU1OGE0NzZjODczZWU3NTdhMTM0MA",
      title: "Camera",
    },
  ];

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
      <div className="bg-[#F7F7F7] pt-4  mt-2">
        <h1 className="font-bold text-[#333333] uppercase text-center text-xl ">
          Explore Our Range Of Products
        </h1>

        <div className=" px-[2em]  pb-8  pl-20 pr-20  ">
          <Slider {...settings}>
            {data.map((pro,ind) => (
              <div key={ind} className="text-center pt-5 ">
                <img
                  className="m-auto pb-4 transition-transform duration-300 hover:scale-110"
                  src={pro.img}
                  alt=""
                />
                <h1 className="text-[#5E5E5E] hover:text-[#40669F]">
                  {pro.title}
                </h1>
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-center pb-5">
          <button onClick={()=>navigate('/all_products')} className="bg-[#003380] text-white py-2 px-3 rounded-[50px] text-sm">
            View All
          </button>
        </div>
      </div>
    </>
  );
}

export default Explore;
