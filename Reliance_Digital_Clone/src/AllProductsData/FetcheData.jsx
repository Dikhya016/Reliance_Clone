import React, { useEffect, useState } from "react";
import ShowProducts from "../Components/ShowProducts";
import ImageSlider from "../Components/ImageSlider";
import GreatDeals from "../Components/GreatDeals";
import RelianceBrand from "../Components/RelianceBrand";
import Banner from "../Components/Banner";

import subimg1 from "../assets/subSlide_1.jpg";
import subimg2 from "../assets/subSlide_2.jpg";
import subimg3 from "../assets/subSlide_3.jpg";
import mid1 from "../assets/midSlider-1.jpg";
import mid2 from "../assets/midSlider-2.jpg";
import mid3 from "../assets/midSlider-3.jpg";
import mid4 from "../assets/midSlider-4.jpg";
import mid5 from "../assets/midSlider-5.jpg";
import mid6 from "../assets/midSlider-6.jpg";
import mid7 from "../assets/midSlider-7.jpg";
import mid8 from "../assets/midSlider-8.jpg";
import banner3 from "../assets/Weekdays-Bank-Strip-Dec-D.jpg";

const FetcheData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  const handleFetch = async () => {
    try {
      const res = await fetch(
        `https://server-ecommerce-h2f9.onrender.com/products`
      );
      const finalRes = await res.json();
      setProducts(finalRes);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false once data is fetched
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      {loading ? (
        <div className="h-screen bg-white">
          <div className="flex justify-center items-center h-full">
            <img
              className="h-16 w-16"
              src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
              alt="Loading spinner"
            />
          </div>
        </div>
      ) : (
        <>
          <ShowProducts
            data={products.slice(0, 10)}
            heading="Best Selling audio| 3Hr Instant Delivery| 3 Months Jio Saavn Free*"
          />
          <ShowProducts
            data={products.slice(10, 20)}
            heading="Avail No-cost EMI on Premium Smartwatches"
          />
          <ShowProducts
            data={products.slice(20, 28)}
            heading="Mobile hot sellers starting @ 6499"
          />
          <ImageSlider images={[subimg1, subimg2, subimg3]} />
          <GreatDeals />
          <ShowProducts
            data={products.slice(10, 20)}
            heading="Soundbars for Every Setup"
          />
          <ShowProducts
            data={products.slice(28, 36)}
            heading="Winter Ready Hot Water Anytime You Need | Upto 50% Off"
          />
          <ShowProducts
            data={products.slice(36, 44)}
            heading="Trending Tablets | No Cost EMI Available*"
          />
          <ShowProducts
            data={products.slice(44, 52)}
            heading="Efficient Washing Machines | Upto 50% Off"
          />
          <ShowProducts
            data={products.slice(52, 60)}
            heading="Smart TVs for Modern Homes"
          />
          <ImageSlider images={[mid1, mid2, mid3, mid4, mid5, mid6, mid7, mid8]} />
          <RelianceBrand />
          <Banner image={banner3} />
          <ShowProducts
            data={products.slice(60, 67)}
            heading="Top Monitors | Great Deals Inside"
          />
          <ShowProducts
            data={products.slice(67, 73)}
            heading="Pure Water Anytime | Exclusive Offers"
          />j
        </>
      )}
    </>
  );
};

export default FetcheData;
