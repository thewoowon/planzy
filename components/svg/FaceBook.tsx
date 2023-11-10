const FaceBook = ({ color = "white", size = 92 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_47_2274)">
        <rect
          width="60"
          height="60"
          rx="30"
          transform="matrix(1 0 0 -1 16 72)"
          fill="#0040E6"
          fill-opacity="0.65"
          shape-rendering="crispEdges"
        />
        <rect
          x="0.5"
          y="-0.5"
          width="59"
          height="59"
          rx="29.5"
          transform="matrix(1 0 0 -1 16 71)"
          stroke="white"
          shape-rendering="crispEdges"
        />
      </g>
      <path
        d="M66.9756 42.1222C66.9756 31.009 57.8029 22 46.4878 22C35.1727 22 26 31.009 26 42.1222C26 52.1658 33.4921 60.4904 43.2866 62V47.9388H38.0846V42.1222H43.2866V37.689C43.2866 32.6459 46.3453 29.8602 51.0251 29.8602C53.2667 29.8602 55.6113 30.2533 55.6113 30.2533V35.2052H53.0278C50.4827 35.2052 49.689 36.7563 49.689 38.3476V42.1222H55.3712L54.4628 47.9388H49.689V62C59.4835 60.4904 66.9756 52.1658 66.9756 42.1222Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_47_2274"
          x="0"
          y="0"
          width="92"
          height="92"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.00579069 0 0 0 0 0.289535 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_47_2274"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_47_2274"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default FaceBook;
