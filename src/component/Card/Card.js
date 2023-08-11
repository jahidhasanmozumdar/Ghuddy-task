import React from "react";
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
    discount_percent,
    display_facilities,
  } = props.hotels;

  return (
    <div className="shadow rounded-[1.1rem] bg-white min-h-[381px] min-w-[252px] max-w-[252px] md:min-h-[381px] md:min-w-[252px] md:max-w-[252px] xl:min-h-[442px] xl:min-w-[279px] xl:max-w-[279px] hover:border-[#4E90A8] hover:shadow-xl relative">
      <div className="flex justify-center relative overflow-hidden min-h-[205px] w-full  max-h-[205px]">
        <img src={thumb_image} alt="" className="rounded-t-[12px]" />
        <div>
          <div className="absolute top-0 left-0 flex justify-center items-center gap-[6px] mt-[12px]  px-[60px]  z-10 bg-red-500  font-medium text-white select-none text-[12px] min-w-[122px] max-h-[21px] max-w-[122px] py-[2px] pl-[8px] pr-[2px]">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M1.31246 4.96924H12.6875M0.968475 5.27926L6.64914 12.121C6.69042 12.171 6.74354 12.2115 6.80437 12.2393C6.86521 12.2672 6.93213 12.2817 6.99996 12.2817C7.06779 12.2817 7.13471 12.2672 7.19555 12.2393C7.25638 12.2115 7.30949 12.171 7.35078 12.121L13.0314 5.27926C13.0873 5.21173 13.1197 5.13002 13.1243 5.04498C13.129 4.95994 13.1056 4.87561 13.0574 4.80318L11.1305 1.915C11.0908 1.85523 11.0354 1.80587 10.9694 1.77161C10.9034 1.73734 10.829 1.71932 10.7534 1.71924H3.24648C3.17087 1.71932 3.09654 1.73734 3.03054 1.77161C2.96455 1.80587 2.90908 1.85523 2.86941 1.915L0.942499 4.80318C0.894279 4.87561 0.870939 4.95994 0.875579 5.04498C0.880219 5.13002 0.91262 5.21173 0.968475 5.27926V5.27926Z"
                  stroke="white"
                  stroke-width="0.826531"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.9375 2.12549L9.625 4.96924L7 1.71924M3.0625 2.12549L4.375 4.96924L7 1.71924M7 11.8755L4.375 4.96924M7 11.8755L9.625 4.96924"
                  stroke="white"
                  stroke-width="0.826531"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span>{discount_percent.toFixed(0)}%</span>
            <span>Off</span>
            <span className="min-w-[33px] max-h-[17px] rounded-[3px] px-[2px] bg-white text-[#F63131]">
              Deal!!
            </span>
          </div>
          <span className="absolute top-0 right-[-50px] inline-flex mt-[12px]  px-[60px] py-[6px]  z-10 text-sm font-medium text-white select-none">
            <FavoriteBorderOutlinedIcon />
          </span>
        </div>
      </div>
      <div className="mt-[8px] px-[12px]  ">
        <div className="flex justify-between">
          <h2 className="font-normal text-[14px] xl:text-[16px] text-[#142B33] line-clamp-2">
            {property_name}
          </h2>
          <div className="flex justify-center items-center mt-[4] text-[12px] xl:text-[14px]">
            <span className="min-h-[11px] min-w-[11px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M16.4798 5.78682L12.1078 5.15675L10.1534 1.22777C10.1 1.1202 10.0122 1.03312 9.90375 0.980182C9.63168 0.846997 9.30107 0.957985 9.16504 1.22777L7.21063 5.15675L2.83863 5.78682C2.71809 5.8039 2.60789 5.86025 2.52351 5.94562C2.42151 6.04958 2.3653 6.18945 2.36724 6.33449C2.36917 6.47953 2.4291 6.61787 2.53384 6.71912L5.69705 9.77727L4.94973 14.0956C4.9322 14.196 4.94341 14.2993 4.98209 14.3938C5.02076 14.4882 5.08535 14.5701 5.16853 14.63C5.25171 14.6899 5.35016 14.7255 5.4527 14.7327C5.55525 14.74 5.65779 14.7186 5.74871 14.671L9.65923 12.6322L13.5698 14.671C13.6765 14.7273 13.8005 14.7461 13.9193 14.7256C14.2189 14.6744 14.4204 14.3927 14.3687 14.0956L13.6214 9.77727L16.7846 6.71912C16.8707 6.63545 16.9275 6.52617 16.9448 6.40665C16.9913 6.10783 16.7812 5.83122 16.4798 5.78682Z"
                  fill="#F6D731"
                />
              </svg>
            </span>
            <span>{class_rating}</span>
          </div>
        </div>
        <div className="flex justify-start items-center mt-[4px] gap-[4px]">
          <span className="min-h-[11px] min-w-[11px]">
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
          <p className="text-[12px] xl:text-[14px]  text-gray-800">
            {short_address?.slice(0, 30) +
              (short_address?.length > 30 ? "..." : "")}
          </p>
        </div>
        <div className="flex justify-start items-start mt-[12px] gap-x-[4px] ">
          <span className="mt-[4px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
            >
              <g clip-path="url(#clip0_273_635)">
                <path
                  d="M10.5971 4.15659L7.12067 0.679678C6.69041 0.250673 6.1076 0.00976562 5.50001 0.00976562C4.89241 0.00976562 4.3096 0.250673 3.87934 0.679678L0.402881 4.15659C0.274742 4.28391 0.17315 4.4354 0.103993 4.60227C0.0348366 4.76914 -0.000508934 4.94808 5.53643e-06 5.12872V9.62818C5.53643e-06 9.99285 0.144871 10.3426 0.402734 10.6004C0.660596 10.8583 1.01033 11.0032 1.37501 11.0032H9.62501C9.98968 11.0032 10.3394 10.8583 10.5973 10.6004C10.8551 10.3426 11 9.99285 11 9.62818V5.12872C11.0005 4.94808 10.9652 4.76914 10.896 4.60227C10.8269 4.4354 10.7253 4.28391 10.5971 4.15659ZM6.87501 10.0865H4.12501V8.28343C4.12501 7.91876 4.26987 7.56902 4.52773 7.31116C4.7856 7.05329 5.13533 6.90843 5.50001 6.90843C5.86468 6.90843 6.21442 7.05329 6.47228 7.31116C6.73014 7.56902 6.87501 7.91876 6.87501 8.28343V10.0865ZM10.0833 9.62818C10.0833 9.74974 10.0351 9.86631 9.9491 9.95227C9.86314 10.0382 9.74656 10.0865 9.62501 10.0865H7.79167V8.28343C7.79167 7.67564 7.55023 7.09275 7.12046 6.66297C6.69069 6.2332 6.10779 5.99176 5.50001 5.99176C4.89222 5.99176 4.30932 6.2332 3.87955 6.66297C3.44978 7.09275 3.20834 7.67564 3.20834 8.28343V10.0865H1.37501C1.25345 10.0865 1.13687 10.0382 1.05092 9.95227C0.964961 9.86631 0.916672 9.74974 0.916672 9.62818V5.12872C0.917097 5.00725 0.965342 4.89084 1.05096 4.80468L4.52742 1.32914C4.78579 1.07198 5.13548 0.92761 5.50001 0.92761C5.86453 0.92761 6.21423 1.07198 6.47259 1.32914L9.94905 4.80605C10.0343 4.89187 10.0826 5.00773 10.0833 5.12872V9.62818Z"
                  fill="#142B33"
                />
              </g>
              <defs>
                <clipPath id="clip0_273_635">
                  <rect width="11" height="11" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          {display_facilities?.slice(0, 3)?.map((facilities) => (
            <p
              className="text-[12px] xl:text-[14px] 
           text-gray-800"
            >
              {facilities.name},
            </p>
          ))}
          <p
            className="text-[12px] xl:text-[14px] 
           text-gray-800"
          ></p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-[2px] absolute bottom-[16px] mx-auto w-full">
          <h2 className="text-[12px]">Checkout Price:</h2>
          <div className="flex text-[16px] justify-evenly items-center gap-[4px]">
            <p>{Math.ceil(red_price)}BDT</p>
            <p>
              <del>{black_price}</del>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
