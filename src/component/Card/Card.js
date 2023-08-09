import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Card = (props) => {
  const {
    property_name,
    thumb_image,
    short_address,
    black_price,
    red_price,
    property_tag,
    class_rating,
  } = props.hotels;

  return (
    <div className="mt-[8px]">
      <div class="shadow rounded-[1.1rem] bg-white h-[30rem] xxl:h-[47rem] w-[18rem] xxl:w-[22rem] hover:border-[#4E90A8] hover:shadow-xl">
        <div class="flex justify-center relative overflow-hidden w-[18rem] xxl:w-full h-[15rem] xxl:h-[17.3rem]">
          <img src={thumb_image} alt="" className="rounded-md" />
          <div>
            <span className="absolute top-0 left-0 inline-flex mt-[12px]  px-[60px] py-[6px]  z-10 bg-red-500 text-sm font-medium text-white select-none">
              70% <span>Deal</span>
            </span>
            <span className="absolute top-0 right-[-50px] inline-flex mt-[12px]  px-[60px] py-[6px]  z-10 text-sm font-medium text-white select-none">
              <FavoriteBorderOutlinedIcon />
            </span>
          </div>
        </div>
        <div className="mt-4 px-[8px] ">
          <div className="flex justify-between">
            <h2 class="font-normal text-base md:text-lg text-gray-800">
              {property_name}
            </h2>
            <div className="flex justify-center items-center">
              <StarBorderIcon className="text-amber-600" />
              <span>{class_rating}</span>
            </div>
          </div>
          <div className="flex justify-start items-center mt-[4px]">
            <LocationOnOutlinedIcon />
            <p class="mt-2 text-sm text-gray-800 line-clamp-1">
              {short_address}
            </p>
          </div>
          <div className="flex justify-start items-center mt-[4px]">
            <HomeOutlinedIcon />
            <p class="mt-2 text-sm text-gray-800 ">{property_tag}</p>
          </div>
          <div className="flex flex-col justify-start items-center mt-[4px]">
            <h2>Checkout Price:</h2>
            <div className="flex justify-evenly items-center gap-[4px]">
              <p>{Math.ceil(red_price)}BDT</p>
              <p>
                <del>{black_price}</del>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
