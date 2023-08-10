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
    <div>
      <div
        className="shadow rounded-[1.1rem] bg-white h-[381px] w-[252px] md:h-[381px] md:w-[252px] 
      lg:h-[442px] lg:w-[279px] hover:border-[#4E90A8] hover:shadow-xl"
      >
        <div className="flex justify-center relative overflow-hidden min-h-[205px] w-full max-h-[205px]">
          <img src={thumb_image} alt="" className="rounded-t-[12px]" />
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
            <h2 className="font-normal text-base md:text-lg text-gray-800">
              {property_name}
            </h2>
            <div className="flex justify-center items-center">
              <StarBorderIcon className="text-amber-600" />
              <span>{class_rating}</span>
            </div>
          </div>
          <div className="flex justify-start items-center mt-[4px]">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
              >
                <g clip-path="url(#clip0_260_570)">
                  <path
                    d="M12.25 6.33252C12.25 10.4159 7 13.9159 7 13.9159C7 13.9159 1.75 10.4159 1.75 6.33252C1.75 4.94013 2.30312 3.60477 3.28769 2.62021C4.27226 1.63564 5.60761 1.08252 7 1.08252C8.39239 1.08252 9.72774 1.63564 10.7123 2.62021C11.6969 3.60477 12.25 4.94013 12.25 6.33252Z"
                    stroke="#142B33"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 8.08252C7.9665 8.08252 8.75 7.29902 8.75 6.33252C8.75 5.36602 7.9665 4.58252 7 4.58252C6.0335 4.58252 5.25 5.36602 5.25 6.33252C5.25 7.29902 6.0335 8.08252 7 8.08252Z"
                    stroke="#142B33"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_260_570">
                    <rect
                      width="14"
                      height="14"
                      fill="white"
                      transform="translate(0 0.500488)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <p className="text-sm text-gray-800">{short_address}</p>
          </div>
          <div className="flex justify-start items-center mt-[4px]">
            <HomeOutlinedIcon />
            <p className="mt-2 text-sm text-gray-800 ">{property_tag}</p>
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
