const Apple = ({ color = "white", size = 92 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_47_2273)">
        <rect
          width="60"
          height="60"
          rx="30"
          transform="matrix(1 0 0 -1 16 72)"
          fill="black"
          fill-opacity="0.85"
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
        d="M57.2313 49.3791C56.7869 50.4272 56.2609 51.392 55.6515 52.279C54.8208 53.4882 54.1407 54.3253 53.6165 54.7901C52.804 55.553 51.9334 55.9437 51.0012 55.9659C50.3319 55.9659 49.5248 55.7715 48.5853 55.3771C47.6427 54.9845 46.7765 54.7901 45.9844 54.7901C45.1537 54.7901 44.2628 54.9845 43.3099 55.3771C42.3555 55.7715 41.5867 55.9771 40.9989 55.9974C40.1049 56.0363 39.2138 55.6345 38.3244 54.7901C37.7567 54.2845 37.0466 53.4179 36.196 52.1901C35.2833 50.8791 34.533 49.3587 33.9451 47.6255C33.3156 45.7533 33 43.9404 33 42.1853C33 40.1748 33.4255 38.4407 34.2778 36.9876C34.9476 35.8204 35.8387 34.8997 36.9539 34.2238C38.0692 33.5479 39.2742 33.2035 40.5719 33.1815C41.282 33.1815 42.2131 33.4057 43.3703 33.8464C44.5242 34.2886 45.2651 34.5129 45.5899 34.5129C45.8328 34.5129 46.6558 34.2507 48.0511 33.7279C49.3706 33.2431 50.4842 33.0424 51.3965 33.1215C53.8686 33.3252 55.7259 34.3201 56.961 36.1127C54.7501 37.4804 53.6564 39.3961 53.6782 41.8536C53.6982 43.7678 54.3783 45.3607 55.715 46.6255C56.3208 47.2125 56.9973 47.6662 57.75 47.9884C57.5868 48.4717 57.4145 48.9347 57.2313 49.3791ZM51.5616 26.6002C51.5616 28.1005 51.0247 29.5014 49.9546 30.798C48.6633 32.3394 47.1013 33.2302 45.4075 33.0896C45.3859 32.9096 45.3734 32.7202 45.3734 32.5211C45.3734 31.0808 45.9875 29.5393 47.0781 28.279C47.6226 27.6409 48.315 27.1103 49.1548 26.687C49.9927 26.2701 50.7853 26.0395 51.5308 26C51.5525 26.2006 51.5616 26.4012 51.5616 26.6002V26.6002Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_47_2273"
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
            result="effect1_dropShadow_47_2273"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_47_2273"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Apple;
