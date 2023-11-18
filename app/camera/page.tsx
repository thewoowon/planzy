"use client";
import XIcon from "@/components/svg/X";
import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import toast from "react-hot-toast";

const CameraPage = () => {
  const router = useRouter();

  const imageRef = useRef<HTMLImageElement>(null);

  const handleClick = () => {
    imageRef.current?.classList.add("flash-animation");
    toast.success("사진을 찍었어요", {
      icon: "⭐️",
      position: "top-center",
      style: {
        borderRadius: "10px",
        background: "#18A402",
        color: "#fff",
      },
    });
    setTimeout(() => {
      router.push("/review");
    }, 1000);
  };
  return (
    <div className="w-full h-screen relative">
      <div className="rounded-t-[16px] bg-white z-10 h-[180px] absolute bottom-0 w-full flex justify-center items-center">
        <Circle
          width="80px"
          height="80px"
          color="rgba(24, 164, 2, 0.90);"
          className="hover:opacity-90"
          onClick={handleClick}
        >
          <Circle width="70px" height="70px" color="white">
            <Circle
              width="60px"
              height="60px"
              color="rgba(24, 164, 2, 0.90);"
            />
          </Circle>
        </Circle>
      </div>
      <ImageBox>
        <Image
          ref={imageRef}
          src={
            "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/04403ab9-a33b-4e1e-fa12-886d4b319f00/public"
          }
          alt=""
          fill
        />
      </ImageBox>
      <GradientBox />
      <div
        className="z-10 absolute top-[52px] right-[36px]"
        onClick={() => {
          router.push("/");
        }}
      >
        <button>
          <XIcon />
        </button>
      </div>
    </div>
  );
};

export default CameraPage;

const Circle = styled.div<{
  width?: string;
  height?: string;
  color?: string;
}>`
  background-color: ${(props) => props.color || "#F2F2F2"};
  border-radius: 50%;
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "100px"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: #f2f2f2;
`;

const GradientBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  z-index: 10;
  background: linear-gradient(
    180deg,
    #020000 0%,
    rgba(1, 0, 0, 0.54) 28.32%,
    rgba(200, 200, 200, 0) 61.57%
  );
`;
