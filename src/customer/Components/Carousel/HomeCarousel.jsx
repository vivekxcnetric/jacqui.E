import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { homeCarouselData } from "./HomeCaroselData";
import { useNavigate } from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();

const HomeCarousel = ({ images }) => {
  const navigate = useNavigate();
  const selectedImages = images?.filter(
    (image, index) => index === 1 || index === 5
  );
  const item = selectedImages?.map((item, index) => (
    <img
      className="cursor-pointer"
      // onClick={() => navigate(item.path)}
      src={`${item.url}`}
      // src={images.url}
      alt={`banner-${index + 1}`}
      onDragStart={handleDragStart}
      role="presentation"
      // style={{ height: 450, width: 1500 }}
      style={{
        width: "100vw",
        objectFit: "contain",
        height: "auto",
      }}
    />
  ));
  return (
    <>
      <p className="hidden sm:flex h-10 items-center justify-center bg-black px-4 text-sm font-medium text-white sm:px-6 lg:px-8 tracking-wider sm:text-base lg:text-lg">
        $5 DELIVERY WHEN YOU SPEND
        <span className="font-extrabold tracking-wider inline-block px-1">
          $130+
        </span>
        SITEWIDE |
        <span className="font-extrabold tracking-wider inline-block px-1">
          ENDS SUNDAY
        </span>
      </p>
      <AliceCarousel
        mouseTracking
        items={item}
        autoPlay
        infinite
        autoPlayInterval={3000}
        disableButtonsControls
      />
    </>
  );
};

export default HomeCarousel;
