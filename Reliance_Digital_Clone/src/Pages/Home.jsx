// import Categories from "../Components/Categories";
import Banner from "../Components/Banner";
import ImageSlider from "../Components/ImageSlider";

import banner1 from "../assets/Digital-Gift-Of-Joy-Carousal-Banners-03-12-2024.jpg";
import banner2 from "../assets/Strip-MNS-Banner-D.jpg";

import FetcheData from "../AllProductsData/FetcheData";

import img1 from "../assets/slider-1.jpg";
import img2 from "../assets/slider-2.jpg";
import img3 from "../assets/slider-3.jpg";
import img4 from "../assets/slider-4.jpg";
import img5 from "../assets/slider-5.jpg";
import img6 from "../assets/slider-6.jpg";
import img7 from "../assets/slider-7.jpg";
import img8 from "../assets/slider-8.jpg";
import Explore from "../Components/Explore";

const Home = () => {
  return (
    <>
      <div className="bg-[#E9EBEE]">
          
          <Banner image={banner1} />
          <ImageSlider
            images={[img1, img2, img3, img4, img5, img6, img7, img8]}
          />
          <Banner image={banner2} />
          <FetcheData />
          <Explore />
      </div>
    </>
  );
};

export default Home;
