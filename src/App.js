import "./App.css";
import { useEffect, useState } from "react";
import Card from "./component/Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function App() {
  // Icon button fetch
  const [buttonValue, setButtonValue] = useState([]);
  useEffect(() => {
    fetchButton();
  }, []);
  const fetchButton = async () => {
    const res = await fetch("propertyType.json");
    const data = await res.json();
    setButtonValue(data);
  };
  // const [isActive, setIsActive] = useState(false);
  // const handleActive = () => {};

  // destination fetch
  const [activeFilter, setActiveFilter] = useState(null); // Keeps track of the active filter
  const [hotelData, setHotelData] = useState([]); // Stores the list of hotel data to be displayed
  useEffect(() => {
    fetchHotelData(activeFilter);
  }, [activeFilter]);

  const fetchHotelData = async (propertyType) => {
    let url = "https://dev.ghuddy.link/api/v1/open/hotels";

    if (propertyType) {
      url += `?propertyType=${propertyType}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.esHotelCardList);
    setHotelData(data.esHotelCardList);
  };

  const handleClick = (value) => {
    if (activeFilter === value) {
      setActiveFilter(null); // Deselect the active filter
    } else {
      console.log(value);
      setActiveFilter(value);
    }
  };

  return (
    <>
      <div className="max-w-full md:max-w-[743px] xl:max-w-[1440px] mx-auto pl-[16px] md:pl-[16px] lg:pl-[16px] xl:pl-[170px]">
        <h1 className="text-[32px] font-medium">Tours</h1>
        <div className="flex flex- justify-start items-center mt-[16px] mb-[16px] ">
          <div className="flex flex-nowrap  items-center overflow-x-scroll scroll-control w-full mr-[-80px]   pr-[16px] xl:pr-[170px]">
            {buttonValue?.map((buttons) => (
              <button
                onClick={() => handleClick(buttons?.value)}
                className={`flex flex-col justify-center items-center px-[6px] py-[10px] rounded-sm ${
                  activeFilter === buttons?.value
                    ? "bg-[#4E90A8] text-white "
                    : ""
                }`}
              >
                <div className="flex flex-col justify-start items-center w-[64px] h-[58px] md:w-[64px] md:h-[58px] lg:w-[78px] lg:h-[60px]">
                  <img
                    className="w-[20px] h-[20px] mr-2"
                    src={buttons?.iconUrl}
                    alt=""
                  />
                  <p className="text-[#142B33] text-[12px]">{buttons?.label}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-3xl">Top destination</h1>
            <span className=" flex justify-between pb-[8px] mt-[16px] mb-[16px]">
              <svg
                id="sliderButtonPrev"
                className="cursor-pointer swiper-button-disabled"
                width="30"
                height="6"
                viewBox="0 0 30 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29 3.5C29.2761 3.5 29.5 3.27614 29.5 3C29.5 2.72386 29.2761 2.5 29 2.5L29 3.5ZM0 3L5 5.88675L5 0.113251L0 3ZM29 2.5L4.5 2.5L4.5 3.5L29 3.5L29 2.5Z"
                  fill="#868686"
                ></path>
              </svg>
              <svg
                id="sliderButtonNext"
                className="cursor-pointer"
                width="30"
                height="6"
                viewBox="0 0 30 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 2.5C0.723858 2.5 0.5 2.72386 0.5 3C0.5 3.27614 0.723858 3.5 1 3.5V2.5ZM30 3L25 0.113249V5.88675L30 3ZM1 3.5H25.5V2.5H1V3.5Z"
                  fill="#4E90A8"
                ></path>
              </svg>
            </span>
          </div>
          <div>
            <Swiper
              breakpoints={{
                343: {
                  slidesPerView: 1.2,
                  navigationLoop: true,
                  className: "swiper-slide",
                },
                768: {
                  slidesPerView: 2.5,
                  navigationLoop: true,
                  className: "swiper-slide",
                },
                1024: {
                  slidesPerView: 2.5,
                  navigationLoop: true,
                  className: "swiper-slide",
                },
                1280: {
                  slidesPerView: 3.5,
                  navigationLoop: true,
                  className: "swiper-slide",
                },
              }}
            >
              {hotelData.map((hotels) => (
                <SwiperSlide key={Math.random()}>
                  <Card hotels={hotels} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

// spaceBetween={2}
// slidesPerView={3.5}
// navigation
// loop={true}
// className="w-full overflow-hidden my-swiper"
