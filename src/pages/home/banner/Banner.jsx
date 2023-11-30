// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner h-screen w-full font-dancing">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop
        autoplay={true}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="h-screen bg-cover"
            style={{
              backgroundImage: "url(/images/slider/slider-1.jpg)",
            }}
          >
            <div className="z-20 text-white flex justify-center items-center h-screen">
              <div className="content space-y-5 text-center">
                <h2 className="lg:text-7xl text-3xl text-prime ">
                  Art Of Cooking
                </h2>
                <h3 className="lg:text-9xl text-5xl">All About Passion</h3>
                <h4 className="text-5xl font-courgette">And Love</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen bg-cover"
            style={{
              backgroundImage: "url(/images/slider/slider-2.jpg)",
            }}
          >
            <div className="z-20 text-white flex justify-center items-center h-screen">
              <div className="content space-y-5 text-center">
                <h2 className="lg:text-7xl text-3xl text-prime">
                  Taste Of SR Hostel
                </h2>
                <h3 className="lg:text-9xl text-5xl">Started Since</h3>
                <h4 className="text-5xl font-courgette">2020</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen bg-cover"
            style={{
              backgroundImage: "url(/images/slider/slider-3.jpg)",
            }}
          >
            <div className="z-20 text-white flex justify-center items-center h-screen">
              <div className="content space-y-5 text-center">
                <h2 className="lg:text-7xl text-3xl text-prime">Welcome To</h2>
                <h3 className="lg:text-9xl text-5xl">
                  <span className="text-prime">SR</span> <span>Hostel</span>
                </h3>
                <NavLink to="/meal" className="bg-prime btn text-xl">
                  Menu
                </NavLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
