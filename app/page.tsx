"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styled from "@emotion/styled";
import Image from "next/image";
import LinkTitle from "@/components/LinkTitle";
import { useRecoilState } from "recoil";
import { collectionState, loginState } from "@/states";
import { useEffect } from "react";
import { dummyLatLng } from "@/constants/constants";

const imageList = [
  {
    title: "CAFE 나무",
    subtitle: 300,
    image:
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/be42decb-ba56-47ef-86ad-938176640500/public",
  },
  {
    title: "베르베르 회원",
    subtitle: 200,
    image:
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/d68a8942-0647-4bf0-161d-b33e7e2dac00/public",
  },
  {
    title: "와이낫 회원",
    subtitle: 1000,
    image:
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/d68a8942-0647-4bf0-161d-b33e7e2dac00/public",
  },
];

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [collectionList, setCollectionState] = useRecoilState(collectionState);
  useEffect(() => {
    localStorage.getItem("token") ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  useEffect(() => {
    setCollectionState([...dummyLatLng]);
  }, [setCollectionState]);
  return (
    <Container>
      <div className="px-[32px] w-full">
        <LinkTitle
          title="내 주변 식물 지도"
          hrefLabel={"지도 보러가기"}
          href={"/map"}
        />
      </div>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="w-full mt-8 swiper-container"
      >
        {imageList.map((imageObj, index) => (
          <SwiperSlide className="swiper-slide-custom" key={index}>
            <div className="overflow-hidden w-[130px] h-[80px] rounded-lg">
              <Image src={imageObj.image} alt="" width={132} height={132} />
            </div>
            <SwiperTitle>{imageObj.title}</SwiperTitle>
            <div className="flex gap-1 items-center mt-[4px]">
              <svg
                width="8"
                height="10"
                viewBox="0 0 8 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.82464 2.2832C3.52371 2.2832 3.22953 2.37244 2.97932 2.53963C2.7291 2.70682 2.53408 2.94445 2.41892 3.22247C2.30376 3.5005 2.27363 3.80643 2.33234 4.10158C2.39105 4.39672 2.53596 4.66784 2.74875 4.88063C2.96154 5.09342 3.23265 5.23833 3.5278 5.29704C3.82295 5.35575 4.12888 5.32562 4.4069 5.21045C4.68493 5.09529 4.92256 4.90027 5.08975 4.65006C5.25694 4.39984 5.34617 4.10567 5.34617 3.80474C5.34617 3.4012 5.18587 3.01419 4.90052 2.72885C4.61518 2.44351 4.22817 2.2832 3.82464 2.2832ZM3.82464 4.56551C3.67417 4.56551 3.52708 4.52089 3.40198 4.43729C3.27687 4.3537 3.17936 4.23488 3.12178 4.09587C3.0642 3.95686 3.04913 3.80389 3.07849 3.65632C3.10784 3.50875 3.1803 3.37319 3.28669 3.26679C3.39309 3.1604 3.52864 3.08794 3.67622 3.05859C3.82379 3.02923 3.97676 3.0443 4.11577 3.10188C4.25478 3.15946 4.3736 3.25697 4.45719 3.38208C4.54079 3.50719 4.5854 3.65427 4.5854 3.80474C4.5854 4.00651 4.50525 4.20001 4.36258 4.34268C4.21991 4.48535 4.0264 4.56551 3.82464 4.56551Z"
                  fill="#9E9E9E"
                  fillOpacity="0.5"
                />
                <path
                  d="M3.82476 9.12997C3.50445 9.13161 3.18842 9.05649 2.90311 8.91089C2.61781 8.76529 2.37154 8.55346 2.18492 8.29313C0.735282 6.29345 0 4.79017 0 3.82476C0 2.81037 0.402964 1.83753 1.12025 1.12025C1.83753 0.402965 2.81037 0 3.82476 0C4.83915 0 5.81199 0.402965 6.52927 1.12025C7.24655 1.83753 7.64952 2.81037 7.64952 3.82476C7.64952 4.79017 6.91424 6.29345 5.46459 8.29313C5.27798 8.55346 5.03171 8.76529 4.7464 8.91089C4.4611 9.05649 4.14506 9.13161 3.82476 9.12997ZM3.82476 0.830378C3.03068 0.831284 2.26938 1.14713 1.70787 1.70864C1.14637 2.27014 0.830523 3.03144 0.829617 3.82552C0.829617 4.59009 1.54968 6.00398 2.85668 7.80662C2.96764 7.95945 3.1132 8.08384 3.28146 8.16961C3.44972 8.25538 3.6359 8.30009 3.82476 8.30009C4.01362 8.30009 4.1998 8.25538 4.36806 8.16961C4.53632 8.08384 4.68188 7.95945 4.79284 7.80662C6.09983 6.00398 6.8199 4.59009 6.8199 3.82552C6.81899 3.03144 6.50315 2.27014 5.94164 1.70864C5.38014 1.14713 4.61884 0.831284 3.82476 0.830378Z"
                  fill="#9E9E9E"
                  fillOpacity="0.5"
                />
              </svg>
              <SwiperSubtitle>{imageObj.subtitle}M</SwiperSubtitle>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="px-[32px] w-full">
        <LinkTitle
          title="나의 식물 대화창"
          hrefLabel={"내 식물이랑 대화하러 가기"}
          href={"/map"}
          padding="32px 0"
        />
      </div>
      <div className="flex flex-col w-full px-[32px] gap-[8px]">
        {new Array(10).fill(0).map((_, index) => {
          return (
            <ListBox
              key={index}
              className="flex px-[16px] items-center justify-between w-full border-b py-3 hover:bg-slate-100 transition ease-in-out duration-200"
            >
              <div className="flex items-center">
                <ImageBox className="relative w-16 h-16 bg-gray-200 rounded-full">
                  <Image
                    src={
                      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/618ad520-8653-45d2-64d1-9a6876faa500/public"
                    }
                    alt=""
                    fill
                  />
                  {index % 4 === 0 && (
                    <div className="absolute right-0 text-white rounded-full flex justify-center items-center text-[12px] w-[20px] h-[20px] bg-[#06BA0D]">
                      2
                    </div>
                  )}
                </ImageBox>
                <div className="ml-4">
                  <div className="text-[15px] font-bold ">몬스테라</div>
                  <div className="text-sm font-light">
                    제일가는 포테이토칩 안녕
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-sm font-bold text-[#18A402]">어제</div>
              </div>
            </ListBox>
          );
        })}
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 32px 0;
`;

const Title = styled.div`
  color: var(--black-white-black, #212121);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 100% */
`;

const SwiperTitle = styled.div`
  color: #333;

  font-family: Pretendard Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 100% */
  margin-top: 12px;
`;

const SwiperSubtitle = styled.div`
  color: rgba(158, 158, 158, 0.5);
  font-family: Pretendard Variable;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px; /* 120% */
`;

const ListBox = styled.div`
  border-radius: 16px;
  border: 1px solid #fff;

  opacity: 0.65;
  background: #fff;

  box-shadow: 0px 4px 16px 0px rgba(1, 74, 0, 0.2);
`;

const ImageBox = styled.div`
  border-radius: 50px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  box-shadow: 0px 0px 8px 0px rgba(24, 164, 2, 0.16);
  overflow: hidden;
`;
