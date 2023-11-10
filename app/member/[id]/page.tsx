"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import styled from "@emotion/styled";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { RecoilState, useRecoilState } from "recoil";
import { collectionState, selectedState } from "@/states";

const MemberPage = () => {
  const { id } = useParams<{
    id: string;
  }>();

  const [, setSelectedState] = useRecoilState(selectedState);
  const [collectionList, setCollectionState] = useRecoilState(collectionState);

  const pathName = usePathname();

  const router = useRouter();

  const parsedId = parseInt(id);

  const member = collectionList.filter((collection) => {
    return collection.id === parsedId;
  })[0];

  if (isNaN(parsedId)) {
    return <div>잘못된 접근입니다.</div>;
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#E9F5EF]">
      <NavigationHeader title={member.title} href="/map" />
      <div className="flex items-center gap-2 py-[16px]">
        {member.tag.map((tag, index) => {
          return <Tag key={index}>{tag}</Tag>;
        })}
      </div>
      <div
        className="flex flex-col items-start justify-start"
        onClick={() => {
          router.push(`/member/${id}/info`);
        }}
      >
        <Image src={member.img[0]} width={237} height={237} alt="profile" />
        <div className="flex flex-col items-start justify-start pl-2">
          <OptionTitle className="flex items-center gap-2">
            <svg
              width="11"
              height="14"
              viewBox="0 0 11 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.49998 3.28296C5.06724 3.28296 4.64422 3.41128 4.28441 3.6517C3.9246 3.89211 3.64416 4.23383 3.47856 4.63363C3.31296 5.03343 3.26963 5.47335 3.35405 5.89778C3.43848 6.3222 3.64686 6.71206 3.95285 7.01805C4.25885 7.32404 4.6487 7.53243 5.07313 7.61685C5.49755 7.70127 5.93748 7.65794 6.33728 7.49234C6.73708 7.32674 7.07879 7.0463 7.31921 6.68649C7.55962 6.32668 7.68794 5.90366 7.68794 5.47093C7.68794 4.89064 7.45743 4.33412 7.0471 3.9238C6.63678 3.51348 6.08026 3.28296 5.49998 3.28296ZM5.49998 6.56491C5.28361 6.56491 5.0721 6.50075 4.89219 6.38054C4.71229 6.26033 4.57207 6.08947 4.48927 5.88957C4.40647 5.68967 4.3848 5.46971 4.42702 5.2575C4.46923 5.04529 4.57342 4.85036 4.72642 4.69736C4.87941 4.54437 5.07434 4.44017 5.28655 4.39796C5.49877 4.35575 5.71873 4.37742 5.91863 4.46022C6.11853 4.54302 6.28938 4.68324 6.40959 4.86314C6.5298 5.04305 6.59396 5.25456 6.59396 5.47093C6.59396 5.76107 6.4787 6.03933 6.27354 6.24449C6.06838 6.44965 5.79012 6.56491 5.49998 6.56491Z"
                fill="#212121"
              />
              <path
                d="M5.5 13.1289C5.0394 13.1313 4.58494 13.0232 4.17467 12.8139C3.76441 12.6045 3.41027 12.2999 3.14192 11.9255C1.05733 9.04998 0 6.88827 0 5.5C0 4.04131 0.579463 2.64236 1.61091 1.61091C2.64236 0.579463 4.04131 0 5.5 0C6.95869 0 8.35764 0.579463 9.38909 1.61091C10.4205 2.64236 11 4.04131 11 5.5C11 6.88827 9.94267 9.04998 7.85808 11.9255C7.58973 12.2999 7.23559 12.6045 6.82532 12.8139C6.41506 13.0232 5.9606 13.1313 5.5 13.1289ZM5.5 1.19408C4.35811 1.19539 3.26336 1.64958 2.45592 2.45702C1.64848 3.26446 1.19429 4.3592 1.19299 5.50109C1.19299 6.60055 2.22844 8.63372 4.10791 11.2259C4.26746 11.4457 4.47678 11.6245 4.71874 11.7479C4.9607 11.8712 5.22842 11.9355 5.5 11.9355C5.77158 11.9355 6.0393 11.8712 6.28126 11.7479C6.52322 11.6245 6.73254 11.4457 6.89209 11.2259C8.77156 8.63372 9.80701 6.60055 9.80701 5.50109C9.80571 4.3592 9.35152 3.26446 8.54408 2.45702C7.73664 1.64958 6.64189 1.19539 5.5 1.19408Z"
                fill="#212121"
              />
            </svg>
            {member.address}
          </OptionTitle>
          <OptionTitle className="flex items-center gap-2">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 0C4.4122 0 3.34884 0.322569 2.44437 0.926917C1.5399 1.53126 0.834947 2.39025 0.418665 3.39524C0.00238307 4.40023 -0.106535 5.5061 0.105683 6.573C0.317902 7.63989 0.841726 8.6199 1.61091 9.38909C2.3801 10.1583 3.36011 10.6821 4.427 10.8943C5.4939 11.1065 6.59977 10.9976 7.60476 10.5813C8.60975 10.1651 9.46873 9.4601 10.0731 8.55564C10.6774 7.65117 11 6.5878 11 5.5C10.9984 4.04179 10.4185 2.64376 9.38735 1.61265C8.35624 0.581546 6.95821 0.00157716 5.5 0V0ZM5.5 9.625C4.68415 9.625 3.88663 9.38307 3.20827 8.92981C2.52992 8.47655 2.00121 7.83231 1.689 7.07857C1.37679 6.32482 1.2951 5.49542 1.45426 4.69525C1.61343 3.89508 2.00629 3.16008 2.58319 2.58318C3.16008 2.00629 3.89508 1.61342 4.69525 1.45426C5.49543 1.2951 6.32483 1.37679 7.07857 1.689C7.83231 2.00121 8.47655 2.52992 8.92981 3.20827C9.38307 3.88662 9.625 4.68415 9.625 5.5C9.62379 6.59364 9.1888 7.64215 8.41548 8.41547C7.64215 9.1888 6.59365 9.62379 5.5 9.625ZM6.1875 4.89958C6.30419 5.03189 6.38021 5.19506 6.40646 5.3695C6.43271 5.54395 6.40807 5.72226 6.33549 5.88305C6.2629 6.04384 6.14547 6.18027 5.99727 6.27597C5.84907 6.37166 5.67641 6.42257 5.5 6.42257C5.32359 6.42257 5.15093 6.37166 5.00273 6.27597C4.85453 6.18027 4.7371 6.04384 4.66452 5.88305C4.59193 5.72226 4.56729 5.54395 4.59354 5.3695C4.61979 5.19506 4.69582 5.03189 4.8125 4.89958V2.97917C4.8125 2.79683 4.88493 2.62196 5.01387 2.49303C5.1428 2.3641 5.31767 2.29167 5.5 2.29167C5.68234 2.29167 5.85721 2.3641 5.98614 2.49303C6.11507 2.62196 6.1875 2.79683 6.1875 2.97917V4.89958Z"
                fill="#212121"
              />
            </svg>

            {member.time}
          </OptionTitle>
        </div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="w-full mt-8 swiper-container"
      >
        {member.children?.map((target, index) => (
          <SwiperSlide
            className="swiper-slide-custom hover:bg-slate-100 transition ease-in-out duration-200"
            key={index}
          >
            <div
              className="flex flex-col items-center"
              onClick={() => {
                router.push(pathName + "/" + target.id);
              }}
            >
              <div className="overflow-hidden w-[106px] h-[106px] rounded-lg">
                <Image src={target.img} alt="" width={106} height={106} />
              </div>
              <div className="flex items-center gap-1">
                <SwiperTitle>{target.title}</SwiperTitle>
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
                  <SwiperSubtitle>{target.distance}M</SwiperSubtitle>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-[32px] flex gap-4 items-center">
        <button
          className="w-[60px] h-[60px] bg-green-500 flex justify-center rounded-full items-center shadow-lg"
          onClick={() => {
            setSelectedState(parsedId);
            return router.push(`/camera`);
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.625 9.625H12.375V1.375C12.375 0.615613 11.7594 0 11 0C10.2406 0 9.625 0.615613 9.625 1.375V9.625H1.375C0.615613 9.625 0 10.2406 0 11C0 11.7594 0.615613 12.375 1.375 12.375H9.625V20.625C9.625 21.3844 10.2406 22 11 22C11.7594 22 12.375 21.3844 12.375 20.625V12.375H20.625C21.3844 12.375 22 11.7594 22 11C22 10.2406 21.3844 9.625 20.625 9.625Z"
              fill="white"
            />
          </svg>
        </button>
        <button className="bg-[#2BA649] text-white text-[14px] rounded-md px-8 py-3">
          {"공식 홈페이지 바로가기 >"}
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default MemberPage;

const Tag = styled.div`
  color: var(--White, #fff);
  text-align: center;
  font-family: Pretendard Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  border-radius: 4px;
  background: #2ba649;
  padding: 4px 8px;
`;

const OptionTitle = styled.div`
  color: #212121;

  font-family: Pretendard Variable;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px; /* 100% */
`;

const SwiperTitle = styled.div`
  color: #333;

  font-family: Pretendard Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 100% */
`;

const SwiperSubtitle = styled.div`
  color: rgba(158, 158, 158, 0.5);
  font-family: Pretendard Variable;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px; /* 120% */
`;
