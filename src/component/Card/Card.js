import React from "react";

const Card = (props) => {
  // console.log(props.hotels.property_name);
  const {
    property_name,
    thumb_image,
    short_address,
    black_price,
    red_price,
    property_tag,
    class_rating,
  } = props.hotels;
  console.log(property_name);
  return (
    <div className="mt-[8px]">
      <div class="shadow rounded-[1.1rem] bg-white h-[25rem] xxl:h-[41rem] w-[18rem] xxl:w-[22rem] hover:border-[#4E90A8] hover:shadow-xl">
        <div class="flex justify-center relative overflow-hidden w-[18rem] xxl:w-full h-[15rem] xxl:h-[17.3rem]">
          <img src={thumb_image} alt="" className="rounded-md"/>
          <span class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
            Featured
          </span>
        </div>
        <div class="mt-4 px[2px] py-[5px]">
          <div>
            <h2 class="font-medium text-base md:text-lg text-gray-800">
              {property_name}
            </h2>
            <div>
              <span>{class_rating}</span>
            </div>
          </div>
          <p class="mt-2 text-sm text-gray-800 line-clamp-1">{short_address}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
