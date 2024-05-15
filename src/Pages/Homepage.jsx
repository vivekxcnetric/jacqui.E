import React, { useEffect, useState } from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
// import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
// import { sareePage1 } from "../Data/Saree/page1";
// import { dressPage1 } from "../Data/dress/page1";
// import { gounsPage1 } from "../Data/Gouns/gouns";
// import { kurtaPage1 } from "../Data/Kurta/kurta";
// import { mensShoesPage1 } from "../Data/shoes";
// import { mens_kurta } from "../Data/Men/men_kurta";
// import { lengha_page1 } from "../Data/Women/LenghaCholi";
import {
  // receiveGetContent,
  // getTopProducts,
  recieveBannersHome,
  receiveProducts,
} from "../action";
import { getCartItems } from "../action/cart";
import { useDispatch } from "react-redux";

import ProductCard from "../customer/Components/Product/ProductCard/ProductCard";
// import HomeProductCard from "../customer/Components/Home/HomeProductCard";
import Loader from "../customer/Components/Loader/Loader";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [topProducts, setTopProducts] = useState();
  const [banners, setBanners] = useState();
  const [bannersHome, setBannersHome] = useState();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   getTopProducts().then((data) => {
  //     setTopProducts(data.catalogEntryView);
  //   });
  //   console.log("this is top products", topProducts);
  // }, []);

  useEffect(() => {
    receiveProducts().then((data) => {
      // console.log("this  is useEffect data", data);
      // setProducts(data.hits);
      setTopProducts(data.hits);
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  // useEffect(() => {
  //   receiveGetContent().then((data) => {
  //     console.log("this is banners", data);
  //     setBanners(data);
  //   });
  // }, []);

  useEffect(() => {
    recieveBannersHome().then((data) => {
      setBannersHome(data);
    });
    console.log("this is banners", banners);
  }, []);

  //   console.log("this is landing page", topProducts);
  return (
    <div className="">
      {loading ? (
        <Loader />
      ) : (
        <>
          <HomeCarousel images={bannersHome} />

          <div className="space-y-1 py-2">
            {/* <HomeProductSection
    data={topProducts?.slice(0, 10)}
    section={"Top Products"}
  /> */}

            {/* <HomeProductSection data={bannersHome?.[3]?.url} /> */}
            {/* <HomeProductSection
              data={bannersHome?.[4]?.url}
              styleWidth={"auto"}
            /> */}

            <HomeProductSection data={bannersHome?.[0]?.url} />

            <HomeProductSection data={bannersHome?.[2]?.url} />

            <HomeProductSection
              data={
                "https://jacquie.jgl.com.au/EJ/aurora/images/espot/home/JE2405_E11_ClickFrenzy/JE2405_E11_ClickFrenzy_A_DT_03-1.jpg?impolicy=scale"
              }
            />
            <div className="flex justify-center gap-4 my-10">
              <button
                onClick={() => navigate("/shops")}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-b border-blue-500 hover:border-transparent rounded"
              >
                Shop New In
              </button>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-b border-blue-500 hover:border-transparent rounded">
                Shop Curve
              </button>
            </div>
            <HomeProductSection data={bannersHome?.[3]?.url} />

            {/* <HomeProductSection data={bannersHome?.[5]?.url} /> */}

            {/* <HomeProductSection
    x={topProducts?.slice(0, 6)}
    section={"Tranding Products"}
  /> */}

            <HomeProductSection data={bannersHome?.[7]?.url} />
            <section className="pt-4 pl-8">
              <p className="py-5 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
                Update Your Wardrobe With These Styles
              </p>

              {/* <div className="flex flex-wrap space-y-5 justify-center">
      {topProducts?.slice(0, 5).map((item) => (
        <HomeProductCard product={item} />
      ))}
    </div> */}

              <div className="flex flex-wrap justify-center bg-white  py-1 rounded-md ">
                {/* {customersProduct?.products?.content?.map((item) => (
                <ProductCard product={item} />
              ))} */}
                {topProducts?.slice(0, 5).map((item) => (
                  <ProductCard product={item} />
                ))}

                {/* <ProductCard product={products} /> */}
              </div>
            </section>
            {/* <ProductCard product={topProducts?.slice(0, 6)} /> */}
            {/* <HomeProductSection data={mensShoesPage1} section={"Men's Shoes"} />
  <HomeProductSection data={lengha_page1} section={"Lengha Choli"} />
  <HomeProductSection data={sareePage1} section={"Saree"} />
  <HomeProductSection data={dressPage1} section={"Dress"} />
  <HomeProductSection data={gounsPage1} section={"Women's Gouns"} />
  <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"} /> */}
            {/* <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} /> */}
            <HomeProductSection data={bannersHome?.[4]?.url} />
          </div>
        </>
      )}
    </div>
  );
};

export default Homepage;
