import React, { FC } from "react";
import { ISvgProps } from "../types";

const MedalSVG: FC<ISvgProps> = ({ className, animation }) => (
  <svg
    className={className}
    viewBox="0 0 58 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={animation}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36.5657 64.9025C36.0832 64.8017 35.585 64.9715 35.2666 65.3446C35.2438 65.3712 33.3761 67.5587 31.1706 70.0573L24.9928 51.7584C27.6081 51.5581 30.101 50.9205 32.4011 49.9222C32.4192 49.9141 32.4377 49.9065 32.4558 49.8984C32.6514 49.8127 32.8455 49.7252 33.0382 49.6343C33.0782 49.6157 33.1186 49.5972 33.1586 49.5781C33.3437 49.4901 33.5269 49.3997 33.7087 49.3064C33.8433 49.2379 33.9766 49.167 34.1098 49.0961C34.1479 49.0757 34.1855 49.0557 34.2231 49.0352C34.9882 48.6217 35.7325 48.1673 36.4486 47.6676L42.7021 66.1895L36.5657 64.9025ZM14.8876 70.0572C12.6825 67.5591 10.8144 65.3712 10.7916 65.3445C10.5342 65.0423 10.1583 64.8739 9.76903 64.8739C9.67719 64.8739 9.58441 64.8834 9.49257 64.9024L3.35667 66.189L9.67675 47.4686C10.6051 48.1367 11.5811 48.73 12.5931 49.2511C12.6626 49.2873 12.7325 49.323 12.8025 49.3587C12.9019 49.4086 13.0019 49.4581 13.1027 49.5066C13.2764 49.5913 13.4515 49.6741 13.6276 49.7541C13.6438 49.7617 13.659 49.7688 13.6752 49.7764C15.9667 50.8142 18.4588 51.4885 21.0759 51.7274L14.8876 70.0572ZM2.82799 28.9133C2.82799 17.7483 11.9683 8.66408 23.2026 8.66408C34.4376 8.66408 43.5785 17.7478 43.5785 28.9133C43.5785 36.9197 38.8777 43.855 32.0751 47.1391C32.0266 47.1624 31.978 47.1853 31.93 47.2081C31.8534 47.2443 31.7768 47.2799 31.6997 47.3152C31.6078 47.357 31.5155 47.3984 31.4227 47.4394C31.3951 47.4512 31.3675 47.4631 31.3399 47.4755C29.3428 48.3392 27.2102 48.8844 25.0261 49.0801C25.0004 49.0824 24.9747 49.0848 24.949 49.0867C24.8353 49.0967 24.7211 49.1053 24.6073 49.1129C24.5498 49.1167 24.4927 49.1205 24.4351 49.1238C24.3423 49.1295 24.2495 49.1348 24.1567 49.1391C24.0691 49.1433 23.9811 49.1462 23.8936 49.1491C23.8246 49.1514 23.756 49.1543 23.687 49.1557C23.5262 49.1595 23.3649 49.1619 23.2031 49.1619C23.1108 49.1619 23.019 49.1595 22.9271 49.1586H22.9257C20.2378 49.1229 17.5996 48.5566 15.1625 47.5169C15.1363 47.5055 15.1101 47.494 15.084 47.4826C14.9807 47.4384 14.8779 47.3932 14.7756 47.347C7.73417 44.1551 2.82834 37.0932 2.82834 28.9141L2.82799 28.9133ZM38.6767 45.8856C43.3318 41.6902 46.2601 35.6352 46.2601 28.9133C46.2601 16.2787 35.9169 6 23.2031 6C10.4906 6 0.147351 16.2786 0.147351 28.9133C0.147351 35.5065 2.96528 41.4577 7.46619 45.642L0.0697542 67.5491C-0.0834638 68.0021 0.0197906 68.5022 0.339548 68.8591C0.65931 69.216 1.14704 69.3758 1.61762 69.2764L9.26622 67.6728C10.2136 68.7749 12.3183 71.2097 14.4201 73.5541C14.6775 73.8406 15.0429 74 15.4207 74C15.5102 74 15.6006 73.991 15.6901 73.9729C16.1583 73.8777 16.5399 73.5418 16.6922 73.0916L23.0303 54.3176L29.3684 73.0916C29.5202 73.5418 29.9018 73.8777 30.37 73.9729C30.4595 73.991 30.5499 74 30.6394 74C31.0172 74 31.3831 73.8406 31.64 73.5541C33.7423 71.2097 35.8464 68.7749 36.7934 67.6728L44.4425 69.2764C44.914 69.3754 45.4008 69.216 45.7206 68.8591C46.0403 68.5022 46.1436 68.0021 45.9903 67.5491L38.6767 45.8856ZM13.5221 25.9337C13.5554 25.8319 13.6477 25.6567 13.8951 25.6211L18.4051 24.9696C19.429 24.8217 20.3141 24.1826 20.7719 23.2605L22.7885 19.1997C22.8994 18.9765 23.0959 18.9432 23.2035 18.9432C23.3105 18.9432 23.507 18.9765 23.6174 19.1992L25.6346 23.2605C26.0928 24.1826 26.9773 24.8216 28.0019 24.9696L32.5115 25.6211C32.7589 25.6568 32.8517 25.8319 32.8845 25.9337C32.9178 26.035 32.9468 26.2311 32.7675 26.4043L29.5042 29.5657C28.7633 30.2838 28.4255 31.3173 28.6001 32.3308L29.3705 36.7947C29.4128 37.0393 29.2734 37.1811 29.1868 37.2439C29.0997 37.3067 28.9213 37.3947 28.7 37.2791L24.6664 35.1716C23.7504 34.6929 22.6564 34.6929 21.7404 35.1716L17.7068 37.2791C17.4855 37.3947 17.3066 37.3067 17.22 37.2439C17.1334 37.1811 16.9939 37.0393 17.0363 36.7947L17.8067 32.3308C17.9813 31.3173 17.6435 30.2837 16.9026 29.5657L13.6393 26.4043C13.4599 26.2311 13.4889 26.0351 13.5223 25.9337L13.5221 25.9337ZM15.0305 31.4738C15.1395 31.5794 15.1894 31.7312 15.1637 31.8802L14.3934 36.344C14.1892 37.5246 14.6684 38.6957 15.6439 39.3994C16.1949 39.7976 16.8397 39.9999 17.4888 39.9999C17.9884 39.9999 18.4904 39.88 18.9543 39.6373L22.988 37.5298C23.1226 37.4598 23.2839 37.4598 23.4181 37.5298L27.4522 39.6373C28.5191 40.195 29.7877 40.1036 30.7627 39.3999C31.7376 38.6956 32.2169 37.525 32.0132 36.344L31.2428 31.8806C31.2171 31.7312 31.2671 31.5794 31.3761 31.4738L34.6393 28.3123C35.5025 27.4763 35.807 26.2495 35.4345 25.11C35.0624 23.9708 34.0898 23.1562 32.8968 22.9839L28.3873 22.3325C28.2364 22.3111 28.1065 22.2169 28.0389 22.0813L26.0223 18.02C25.4889 16.946 24.4088 16.2784 23.2034 16.2784C21.9981 16.2784 20.9179 16.946 20.384 18.02L18.3674 22.0813C18.2998 22.2169 18.1699 22.3111 18.0191 22.3325L13.5091 22.9839C12.3167 23.1562 11.3441 23.9708 10.972 25.11C10.5994 26.2496 10.9044 27.4763 11.7671 28.3123L15.0305 31.4738Z"
      fill="#450072"
    />
  </svg>
);

export default MedalSVG;
