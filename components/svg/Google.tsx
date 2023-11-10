const Google = ({ color = "white", size = 92 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_47_2272)">
        <rect
          width="60"
          height="60"
          rx="30"
          transform="matrix(1 0 0 -1 16 72)"
          fill="white"
          fill-opacity="0.6"
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M61.36 42.3638C61.36 41.2292 61.2582 40.1383 61.0691 39.0911H46V45.2802H54.6109C54.24 47.2802 53.1127 48.9747 51.4182 50.1092V54.1238H56.5891C59.6145 51.3383 61.36 47.2365 61.36 42.3638Z"
        fill="#4285F4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M45.9998 57.9998C50.3198 57.9998 53.9417 56.5671 56.5889 54.1234L51.418 50.1089C49.9853 51.0689 48.1526 51.6362 45.9998 51.6362C41.8326 51.6362 38.3053 48.8216 37.0471 45.0398H31.7017V49.1852C34.3344 54.4143 39.7453 57.9998 45.9998 57.9998Z"
        fill="#34A853"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M37.0473 45.0399C36.7273 44.0799 36.5455 43.0545 36.5455 41.9999C36.5455 40.9454 36.7273 39.9199 37.0473 38.9599V34.8145H31.7018C30.6182 36.9745 30 39.4181 30 41.9999C30 44.5817 30.6182 47.0254 31.7018 49.1854L37.0473 45.0399Z"
        fill="#FBBC05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M45.9998 32.3636C48.3489 32.3636 50.458 33.1709 52.1162 34.7564L56.7053 30.1673C53.9344 27.5855 50.3126 26 45.9998 26C39.7453 26 34.3344 29.5855 31.7017 34.8145L37.0471 38.96C38.3053 35.1782 41.8326 32.3636 45.9998 32.3636Z"
        fill="#EA4335"
      />
      <defs>
        <filter
          id="filter0_d_47_2272"
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
            result="effect1_dropShadow_47_2272"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_47_2272"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Google;
