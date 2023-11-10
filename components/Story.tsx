import Image from "next/image";
import React, { useState, useEffect } from "react";
import XIcon from "./svg/X";

const Story = ({
  story,
  onNext,
  onClose,
}: {
  story: {
    id: number;
    title: string;
    imageUrl: string;
    duration: number;
  };
  onNext: VoidFunction;
  onClose: VoidFunction;
}) => {
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    setTimer(
      window.setTimeout(() => {
        onNext();
      }, story.duration)
    );

    return () => clearTimeout(timer);
  }, [story, onNext]);

  return (
    <div className="my-[20px] w-full">
      <div className="h-[681px] w-full relative">
        <div className="absolute top-0 w-full flex justify-between z-10 px-[32px] py-[24px]">
          <div className="flex items-center gap-2">
            <div className="w-[48px] h-[48px] bg-white rounded-full"></div>
            <div>
              <div className="text-white pl-2">
                나는낭만고양이{" "}
                <span className="text-white text-xs">11시간 전</span>
              </div>
              <div className="text-black flex items-center justify-center gap-1 text-[12px] bg-gray-300 px-2 py-1 rounded-2xl">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_134_1079)">
                    <path
                      d="M7.00033 3.5C6.53884 3.5 6.08771 3.63685 5.704 3.89324C5.32028 4.14963 5.02121 4.51404 4.84461 4.94041C4.668 5.36677 4.6218 5.83592 4.71183 6.28854C4.80186 6.74117 5.02409 7.15693 5.35041 7.48325C5.67673 7.80957 6.09249 8.0318 6.54512 8.12183C6.99774 8.21186 7.46689 8.16566 7.89326 7.98905C8.31962 7.81245 8.68403 7.51338 8.94042 7.12966C9.19681 6.74595 9.33366 6.29482 9.33366 5.83333C9.33366 5.21449 9.08783 4.621 8.65024 4.18342C8.21266 3.74583 7.61917 3.5 7.00033 3.5ZM7.00033 7C6.76958 7 6.54402 6.93158 6.35216 6.80338C6.1603 6.67519 6.01077 6.49298 5.92247 6.2798C5.83417 6.06662 5.81106 5.83204 5.85608 5.60573C5.90109 5.37942 6.01221 5.17154 6.17537 5.00838C6.33853 4.84521 6.54641 4.7341 6.77272 4.68908C6.99903 4.64407 7.23361 4.66717 7.44679 4.75547C7.65997 4.84378 7.84218 4.99331 7.97037 5.18517C8.09857 5.37703 8.16699 5.60259 8.16699 5.83333C8.16699 6.14275 8.04408 6.4395 7.82528 6.65829C7.60649 6.87708 7.30975 7 7.00033 7Z"
                      fill="#212121"
                    />
                    <path
                      d="M7.00018 14.0002C6.50898 14.0027 6.02433 13.8875 5.5868 13.6642C5.14928 13.4409 4.77161 13.1161 4.48543 12.7169C2.26235 9.65027 1.13477 7.34494 1.13477 5.86444C1.13477 4.30884 1.75273 2.81694 2.85271 1.71696C3.95269 0.616985 5.44458 -0.000976562 7.00018 -0.000976562C8.55579 -0.000976562 10.0477 0.616985 11.1477 1.71696C12.2476 2.81694 12.8656 4.30884 12.8656 5.86444C12.8656 7.34494 11.738 9.65027 9.51493 12.7169C9.22875 13.1161 8.85109 13.4409 8.41356 13.6642C7.97604 13.8875 7.49138 14.0027 7.00018 14.0002ZM7.00018 1.27244C5.78243 1.27383 4.61494 1.7582 3.75386 2.61928C2.89277 3.48037 2.40841 4.64785 2.40702 5.86561C2.40702 7.03811 3.51127 9.20636 5.5156 11.9708C5.68575 12.2051 5.90898 12.3959 6.16702 12.5274C6.42505 12.659 6.71056 12.7275 7.00018 12.7275C7.28981 12.7275 7.57532 12.659 7.83335 12.5274C8.09138 12.3959 8.31461 12.2051 8.48477 11.9708C10.4891 9.20636 11.5934 7.03811 11.5934 5.86561C11.592 4.64785 11.1076 3.48037 10.2465 2.61928C9.38542 1.7582 8.21794 1.27383 7.00018 1.27244Z"
                      fill="#212121"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_134_1079">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                서울대공원 입구
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <svg
              width="24"
              height="4"
              viewBox="0 0 24 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 2C4 0.895436 3.10457 7.49369e-06 2 7.54197e-06C0.89543 7.59025e-06 -1.35705e-07 0.895436 -8.74226e-08 2C-3.91404e-08 3.10457 0.89543 4 2 4C3.10457 4 4 3.10457 4 2Z"
                fill="white"
              />
              <path
                d="M14 2C14 0.895436 13.1046 7.49369e-06 12 7.54197e-06C10.8954 7.59025e-06 10 0.895436 10 2C10 3.10457 10.8954 4 12 4C13.1046 4 14 3.10457 14 2Z"
                fill="white"
              />
              <path
                d="M24 2C24 0.895436 23.1046 7.49369e-06 22 7.54197e-06C20.8954 7.59025e-06 20 0.895436 20 2C20 3.10457 20.8954 4 22 4C23.1046 4 24 3.10457 24 2Z"
                fill="white"
              />
            </svg>
            <button
              onClick={() => {
                clearTimeout(timer);
                onClose();
              }}
            >
              <XIcon />
            </button>
          </div>
        </div>
        <Image
          src={story.imageUrl}
          alt={story.title}
          fill
          onClick={() => {
            onNext();
          }}
        />
      </div>
    </div>
  );
};

export default Story;
