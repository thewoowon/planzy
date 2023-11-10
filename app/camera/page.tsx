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
      <Image
        ref={imageRef}
        src={
          "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/2287d85e-e923-494b-2b3a-ab1cfc7e8600/public"
        }
        alt=""
        fill
      />
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
