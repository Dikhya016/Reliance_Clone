import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


const ImageSlider = ({images}) => {
 
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleRadioChange = (index) => {
    setCurrentIndex(index);
  };

  // Automatic Slider Logic
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // 
  }, []);

  return (
    <div className="relative flex flex-col items-center mt-3 mb-3">
      {/* Image Container */}
      <div className="relative overflow-hidden w-full">
        <div
          className={`flex transition-transform duration-500 ease-in-out`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
           
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-24 bg-white border-2  bg-opacity-50 "
      >
        <FiChevronLeft className="h-10 w-10 text-black" />
      </button>
      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-24 bg-white border-2  bg-opacity-50"
      >
        <FiChevronRight className="h-10 w-10 text-black" />
      </button>
      {/* Radio Buttons */}
      <div className="absolute z-10 bottom-4 flex items-center space-x-1">
        {images.map((_, index) => (
          <label key={index} className="cursor-pointer px-1">
            <input
              type="radio"
              name="slider"
              checked={currentIndex === index}
              onChange={() => handleRadioChange(index)}
              className="hidden"
            />
            <span
              className={`inline-block w-2 h-2 rounded-full ${
                currentIndex === index ? "bg-black" : "bg-[#ABA3A0]"
              }`}
            ></span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
