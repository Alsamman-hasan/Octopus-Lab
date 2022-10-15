/* eslint-disable max-len */
import React, { FC } from "react";
import { ISvgProps } from "../types";

const DiversitySVG: FC<ISvgProps> = ({
  className,
}) => (
  <svg
    className={className}
    viewBox="0 0 58 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_65_473)">
      <path
        d="M47.8318 12H8.16622C3.66317 12 -0.000488281 15.6641 -0.000488281 20.1667V59.8333C-0.000488281 64.3359 3.66317 68 8.16622 68H47.8328C52.3359 68 55.9995 64.3359 55.9995 59.8333L55.9991 20.1667C55.9991 15.6641 52.3355 12 47.8324 12L47.8318 12ZM53.6653 20.1667V38.8335H47.3974C48.4142 37.4636 48.9986 35.7628 48.9986 33.9535C48.9986 29.5683 45.5966 26 41.4155 26C37.2339 26 33.832 29.5684 33.832 33.9535C33.832 35.7628 34.4163 37.4636 35.4331 38.8331H29.1656V29.5C29.1656 29.4453 29.1418 29.3985 29.1343 29.3461C29.1234 29.2645 29.1144 29.1856 29.0863 29.1086C29.0605 29.0375 29.0222 28.977 28.984 28.9129C28.9457 28.8485 28.9109 28.786 28.8601 28.7293C28.8058 28.6684 28.741 28.6231 28.6746 28.5746C28.6316 28.543 28.6015 28.4996 28.5535 28.4735C28.5367 28.4645 28.518 28.4657 28.5008 28.4574C28.432 28.4242 28.3574 28.4102 28.2824 28.3907C28.2047 28.3707 28.1297 28.3473 28.0512 28.3442C28.0332 28.343 28.0176 28.3332 27.9988 28.3332C27.9449 28.3332 27.8992 28.3567 27.8473 28.3637C27.7648 28.3746 27.6851 28.384 27.6074 28.4121C27.5363 28.4379 27.4758 28.4762 27.4117 28.5145C27.3477 28.5528 27.2848 28.5875 27.2285 28.6379C27.1672 28.6926 27.1219 28.7574 27.0734 28.8239C27.0418 28.8668 26.9984 28.8965 26.9727 28.9449C26.0098 30.7269 24.086 31.8332 21.9524 31.8332C18.8537 31.8332 16.3322 29.4785 16.3322 26.5833C16.3322 23.6884 18.8537 21.3333 21.9524 21.3333C24.0856 21.3333 26.0094 22.4395 26.9723 24.2216C26.9984 24.27 27.0418 24.3001 27.0734 24.3431C27.1219 24.4091 27.1668 24.4739 27.2277 24.5282C27.284 24.5786 27.3465 24.6134 27.4105 24.6513C27.475 24.6899 27.5363 24.7286 27.6082 24.7544C27.6836 24.7813 27.7605 24.7899 27.8398 24.8013C27.8941 24.8091 27.9426 24.8333 27.9988 24.8333C28.0183 24.8333 28.0348 24.8231 28.0543 24.822C28.1297 24.8185 28.2016 24.7958 28.2762 24.7771C28.3539 24.7575 28.4309 24.7431 28.5016 24.7087C28.5183 24.7005 28.5371 24.7017 28.5539 24.6927C28.6023 24.6665 28.6324 24.6231 28.6754 24.5915C28.7414 24.5431 28.8062 24.4981 28.8605 24.4372C28.9109 24.3806 28.9461 24.3181 28.9844 24.2536C29.0226 24.1896 29.0609 24.129 29.0867 24.0579C29.1144 23.9806 29.1234 23.9017 29.1347 23.82C29.1418 23.7681 29.1656 23.7212 29.1656 23.6669V14.3334H47.8324C51.0484 14.3334 53.6655 16.9506 53.6655 20.167L53.6653 20.1667ZM8.16582 14.3332H26.8326V20.6007C25.4627 19.5843 23.762 18.9999 21.9526 18.9999C17.5671 18.9999 13.9992 22.4019 13.9992 26.583C13.9992 30.7642 17.5671 34.1662 21.9526 34.1662C23.762 34.1666 25.4627 33.5822 26.8322 32.5654V38.8329H17.4991C17.4401 38.8329 17.389 38.8579 17.3323 38.8665C17.2569 38.8774 17.1835 38.8856 17.1116 38.911C17.0366 38.938 16.9722 38.9778 16.905 39.0188C16.8437 39.0556 16.7839 39.0888 16.73 39.1368C16.6679 39.1923 16.6218 39.2579 16.5726 39.3251C16.5413 39.3677 16.4984 39.397 16.4726 39.4446C16.4636 39.4614 16.4648 39.4802 16.4566 39.497C16.423 39.5661 16.4089 39.6415 16.3894 39.7173C16.3698 39.7942 16.3468 39.868 16.3433 39.9458C16.3425 39.9649 16.3323 39.9809 16.3323 39.9997C16.3323 40.0544 16.3562 40.1013 16.3636 40.154C16.3745 40.2352 16.3835 40.3138 16.4112 40.3907C16.437 40.4626 16.4757 40.5235 16.5144 40.588C16.5523 40.652 16.587 40.7141 16.6374 40.77C16.6921 40.8313 16.7569 40.8766 16.8234 40.9251C16.8663 40.9567 16.896 41.0001 16.9444 41.0259C18.7256 41.9887 19.8323 43.9133 19.8323 46.0461C19.8323 49.1449 17.4776 51.6664 14.5824 51.6664C11.6875 51.6664 9.33242 49.1449 9.33242 46.0461C9.33242 43.9133 10.4394 41.9892 12.2207 41.0263C12.2687 41.0001 12.2988 40.9567 12.3418 40.9255C12.4082 40.8771 12.473 40.8317 12.5277 40.7704C12.5777 40.7142 12.6129 40.652 12.6508 40.5884C12.6894 40.5239 12.7281 40.463 12.7539 40.3911C12.7816 40.3142 12.7906 40.2356 12.8015 40.1544C12.8086 40.1013 12.8324 40.0544 12.8324 39.9997C12.8324 39.981 12.8226 39.9649 12.8215 39.9462C12.8179 39.8685 12.7949 39.7946 12.7754 39.7177C12.7558 39.6419 12.7418 39.5665 12.7082 39.4974C12.7 39.4806 12.7011 39.4618 12.6922 39.445C12.666 39.397 12.623 39.3673 12.5914 39.3243C12.5426 39.2575 12.4969 39.1923 12.4355 39.1376C12.3797 39.0876 12.3176 39.0528 12.2543 39.0153C12.1894 38.9763 12.1285 38.9376 12.0562 38.9118C11.9797 38.8845 11.9015 38.8755 11.8211 38.8645C11.7683 38.8571 11.7211 38.8329 11.666 38.8329H2.3325V20.1671C2.3325 16.9507 4.94967 14.3336 8.16603 14.3336L8.16582 14.3332ZM2.33229 59.8327V41.1669H8.60022C7.58343 42.5364 6.99904 44.2372 6.99904 46.0465C6.99904 50.4317 10.401 54 14.5822 54C18.7633 54 22.1653 50.4316 22.1653 46.0465C22.1657 44.2372 21.5813 42.5364 20.5645 41.1669H26.832V50.5C26.832 50.5547 26.8559 50.6015 26.8633 50.6539C26.8742 50.7355 26.8836 50.8144 26.9113 50.8918C26.9371 50.9629 26.9754 51.0234 27.0137 51.0875C27.0519 51.1519 27.0871 51.2144 27.1375 51.2711C27.1918 51.332 27.2566 51.3773 27.3226 51.4254C27.3656 51.457 27.3957 51.5004 27.4441 51.5265C27.4609 51.5359 27.4801 51.5347 27.4969 51.5429C27.564 51.5754 27.6371 51.5894 27.7105 51.6086C27.791 51.6297 27.8683 51.6535 27.9496 51.657C27.9672 51.6574 27.9816 51.6668 27.9988 51.6668C28.0492 51.6668 28.0918 51.6445 28.1402 51.6383C28.2273 51.6273 28.3121 51.6172 28.3945 51.5871C28.4617 51.5625 28.5187 51.5258 28.5797 51.4898C28.6469 51.4504 28.7121 51.4136 28.7707 51.3609C28.8308 51.307 28.875 51.2429 28.923 51.1777C28.9551 51.1344 28.9988 51.1039 29.0254 51.055C29.9879 49.2731 31.9116 48.1668 34.0452 48.1668C37.144 48.1668 39.6654 50.5215 39.6654 53.4167C39.6654 56.3116 37.144 58.6667 34.0452 58.6667C31.912 58.6667 29.9883 57.5605 29.0254 55.7784C28.9992 55.7304 28.9562 55.7003 28.9246 55.6573C28.8761 55.5909 28.8304 55.5257 28.7691 55.471C28.7129 55.4206 28.6504 55.3858 28.5867 55.3479C28.5222 55.3093 28.4609 55.2706 28.3894 55.2448C28.3137 55.2175 28.2359 55.2089 28.1558 55.1976C28.1023 55.1905 28.0547 55.1667 27.9988 55.1667C27.9793 55.1667 27.9629 55.1768 27.9437 55.1776C27.8676 55.1811 27.7953 55.2042 27.7199 55.2229C27.643 55.2425 27.5664 55.2569 27.4961 55.2909C27.4793 55.2991 27.4605 55.2979 27.4437 55.3069C27.3953 55.3331 27.3656 55.3765 27.3226 55.4081C27.2566 55.4565 27.1918 55.5018 27.1371 55.5628C27.0867 55.6194 27.0516 55.6819 27.0133 55.7464C26.975 55.8104 26.9367 55.871 26.9109 55.9421C26.8832 56.0194 26.8742 56.0983 26.8629 56.1796C26.8559 56.2319 26.832 56.2784 26.832 56.3331V65.6662L8.16623 65.6666C4.94986 65.6666 2.33269 63.0494 2.33269 59.833L2.33229 59.8327ZM47.8318 65.6662H29.166V59.3987C30.5355 60.4151 32.2363 60.9995 34.0457 60.9995C38.4311 60.9995 41.9991 57.5975 41.9991 53.4164C41.9991 49.2348 38.4311 45.8328 34.0457 45.8328C32.2363 45.8328 30.5355 46.4172 29.166 47.434V41.1665H38.4991C38.553 41.1665 38.5991 41.143 38.6507 41.136C38.7335 41.1251 38.8135 41.1157 38.8921 41.0872C38.9612 41.0622 39.0198 41.0247 39.0823 40.9876C39.1483 40.9485 39.2128 40.9126 39.271 40.8606C39.3311 40.8067 39.3756 40.7427 39.4237 40.6774C39.4557 40.6341 39.4995 40.6036 39.5256 40.5548C39.5346 40.538 39.5335 40.5192 39.5417 40.5024C39.5752 40.4333 39.5893 40.3579 39.6088 40.2821C39.6284 40.2052 39.6514 40.1313 39.6549 40.0536C39.6557 40.0345 39.6659 40.0185 39.6659 39.9997C39.6659 39.945 39.642 39.8981 39.6346 39.8454C39.6237 39.7642 39.6147 39.6856 39.587 39.6087C39.5612 39.5368 39.5225 39.4759 39.4838 39.4114C39.446 39.3474 39.4112 39.2853 39.3608 39.229C39.3061 39.1681 39.2413 39.1224 39.1749 39.0739C39.1319 39.0423 39.1022 38.9993 39.0538 38.9731C37.2726 38.0107 36.1659 36.0861 36.1659 33.9533C36.1659 30.8545 38.5206 28.3331 41.4158 28.3331C44.3107 28.3331 46.6658 30.8545 46.6658 33.9533C46.6658 36.0861 45.5588 38.0103 43.7775 38.9731C43.7295 38.9993 43.6994 39.0423 43.6564 39.0739C43.59 39.1224 43.5252 39.1677 43.4705 39.229C43.4205 39.2853 43.3853 39.3474 43.3474 39.4114C43.3088 39.4759 43.2701 39.5368 43.2443 39.6087C43.2166 39.6856 43.2076 39.7642 43.1967 39.8454C43.1896 39.8981 43.1658 39.945 43.1658 39.9997C43.1658 40.0185 43.1756 40.0345 43.1768 40.0532C43.1803 40.131 43.2037 40.2048 43.2228 40.2817C43.2424 40.3575 43.2564 40.4329 43.29 40.502C43.2982 40.5192 43.2971 40.538 43.306 40.5544C43.3603 40.6552 43.4283 40.7434 43.5049 40.8208C43.5111 40.827 43.5189 40.8306 43.5252 40.8368C43.6166 40.9247 43.7217 40.9915 43.8338 41.0446C43.8658 41.0602 43.8974 41.0727 43.931 41.0852C44.0592 41.1325 44.1924 41.1653 44.3303 41.1657C44.331 41.1661 44.3314 41.1665 44.3322 41.1665H53.6653V59.8333C53.6657 63.0493 51.0485 65.6664 47.8322 65.6664L47.8318 65.6662Z"
        fill="#450072"
      />
    </g>
    <defs>
      <clipPath id="clip0_65_473">
        <rect width="100%" height="100%" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default DiversitySVG;
