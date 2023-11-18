"use client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useRecoilState } from "recoil";
import { collectionState, loginState, userState } from "@/states";

type LatLng = {
  searchString: string;
};

const defaultLatLng = {
  grd_la: 37.3595704,
  grd_lo: 127.105399,
};

const PlanzyMap = () => {
  const navermaps = useNavermaps();
  const [map, setMap] = useState<{
    setCenter: (latlng: any) => void;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LatLng>();

  const [collectionList] = useRecoilState(collectionState);
  const [userInformation] = useRecoilState(userState);
  const [isLoggedIn] = useRecoilState(loginState);

  const [filterList, setFilterList] = useState(collectionList);

  const initialLatLng = new navermaps.LatLng(
    collectionList.length > 0 ? collectionList[0].grd_la : defaultLatLng.grd_la,
    collectionList.length > 0 ? collectionList[0].grd_lo : defaultLatLng.grd_lo
  );

  const [offset, setOffset] = useState<{
    x: number | null;
    y: number | null;
  }>({
    x: null,
    y: null,
  });

  const router = useRouter();
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);

  const onSubmit: SubmitHandler<LatLng> = (data) => {
    const { searchString } = data;
    if (!searchString) {
      return toast.error("검색어를 입력해주세요!", {
        icon: "😥",
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "#FF0000",
          color: "#fff",
        },
      });
    }

    for (let i = 0; i < collectionList.length; i++) {
      if (collectionList[i].title === searchString) {
        map?.setCenter(
          new navermaps.LatLng(
            collectionList[i].grd_la,
            collectionList[i].grd_lo
          )
        );
        setSelectedMarker(i);
        setOffset({
          x: 100,
          y: 150,
        });
        return;
      }
    }
  };

  if (!isLoggedIn) {
    toast.error("로그인 먼저 해주세요!", {
      icon: "😥",
      position: "top-center",
      style: {
        borderRadius: "10px",
        background: "#FF0000",
        color: "#fff",
      },
    });

    router.push("/login");
    return;
  }

  return (
    <MapDiv
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        paddingTop: "80px",
      }}
    >
      <div className="flex flex-col fixed justify-center items-center w-full gap-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-center items-center w-full"
        >
          <FormBox className="flex items-center gap-4 relative w-[326px] h-[56px] bg-white">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7067 14.2968L12.6099 11.1987C14.9271 8.10223 14.2953 3.71356 11.1988 1.39641C8.10223 -0.920736 3.71356 -0.288925 1.39641 2.80759C-0.920736 5.90411 -0.288926 10.2928 2.80759 12.6099C5.29497 14.4713 8.71134 14.4713 11.1988 12.6099L14.2968 15.708C14.6862 16.0973 15.3174 16.0973 15.7067 15.708C16.096 15.3187 16.096 14.6875 15.7067 14.2982L15.7067 14.2968ZM7.02899 12.012C4.27695 12.012 2.04601 9.78103 2.04601 7.02899C2.04601 4.27695 4.27695 2.04601 7.02899 2.04601C9.78103 2.04601 12.012 4.27695 12.012 7.02899C12.009 9.77978 9.77981 12.009 7.02899 12.012Z"
                fill="#9E9E9E"
              />
            </svg>

            <CustomInput
              {...register("searchString")}
              defaultValue={"광진주택"}
              name="searchString"
              type="text"
              required
              autoComplete="true"
              placeholder="보고싶은 식물을 검색!"
            />
          </FormBox>
        </form>
        <div className="flex justify-center items-center w-full">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg flex justify-center items-center gap-1"
            onClick={(e) => {
              // 37.6651695, 126.7418599
              e.preventDefault();
              if (map) {
                map.setCenter(new navermaps.LatLng(37.6651695, 126.7418599));
              }
            }}
          >
            <svg
              width="11"
              height="14"
              viewBox="0 0 11 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.49998 3.28296C5.06724 3.28296 4.64422 3.41128 4.28441 3.6517C3.9246 3.89211 3.64416 4.23383 3.47856 4.63363C3.31296 5.03343 3.26963 5.47335 3.35405 5.89778C3.43848 6.3222 3.64686 6.71206 3.95285 7.01805C4.25885 7.32404 4.6487 7.53243 5.07313 7.61685C5.49755 7.70127 5.93748 7.65794 6.33728 7.49234C6.73708 7.32674 7.07879 7.0463 7.31921 6.68649C7.55962 6.32668 7.68794 5.90366 7.68794 5.47093C7.68794 4.89064 7.45743 4.33412 7.0471 3.9238C6.63678 3.51348 6.08026 3.28296 5.49998 3.28296ZM5.49998 6.56491C5.28361 6.56491 5.0721 6.50075 4.89219 6.38054C4.71229 6.26033 4.57207 6.08947 4.48927 5.88957C4.40647 5.68967 4.3848 5.46971 4.42702 5.2575C4.46923 5.04529 4.57342 4.85036 4.72642 4.69736C4.87941 4.54437 5.07434 4.44017 5.28655 4.39796C5.49877 4.35575 5.71873 4.37742 5.91863 4.46022C6.11853 4.54302 6.28938 4.68324 6.40959 4.86314C6.5298 5.04305 6.59396 5.25456 6.59396 5.47093C6.59396 5.76107 6.4787 6.03933 6.27354 6.24449C6.06838 6.44965 5.79012 6.56491 5.49998 6.56491Z"
                fill="white"
              />
              <path
                d="M5.5 13.1289C5.0394 13.1313 4.58494 13.0232 4.17467 12.8139C3.76441 12.6045 3.41027 12.2999 3.14192 11.9255C1.05733 9.04998 0 6.88827 0 5.5C0 4.04131 0.579463 2.64236 1.61091 1.61091C2.64236 0.579463 4.04131 0 5.5 0C6.95869 0 8.35764 0.579463 9.38909 1.61091C10.4205 2.64236 11 4.04131 11 5.5C11 6.88827 9.94267 9.04998 7.85808 11.9255C7.58973 12.2999 7.23559 12.6045 6.82532 12.8139C6.41506 13.0232 5.9606 13.1313 5.5 13.1289ZM5.5 1.19408C4.35811 1.19539 3.26336 1.64958 2.45592 2.45702C1.64848 3.26446 1.19429 4.3592 1.19299 5.50109C1.19299 6.60055 2.22844 8.63372 4.10791 11.2259C4.26746 11.4457 4.47678 11.6245 4.71874 11.7479C4.9607 11.8712 5.22842 11.9355 5.5 11.9355C5.77158 11.9355 6.0393 11.8712 6.28126 11.7479C6.52322 11.6245 6.73254 11.4457 6.89209 11.2259C8.77156 8.63372 9.80701 6.60055 9.80701 5.50109C9.80571 4.3592 9.35152 3.26446 8.54408 2.45702C7.73664 1.64958 6.64189 1.19539 5.5 1.19408Z"
                fill="white"
              />
            </svg>
            현재 위치로 재검색
          </button>
        </div>
      </div>

      <NaverMap defaultCenter={initialLatLng} defaultZoom={16} ref={setMap}>
        {filterList.map((latlng: { grd_la: number; grd_lo: number }, index) => {
          return (
            <Marker
              position={new navermaps.LatLng(latlng.grd_la, latlng.grd_lo)}
              key={index}
              draggable={false}
              onClick={(e) => {
                setSelectedMarker(index);
                setOffset({
                  x: e.offset.x,
                  y: e.offset.y,
                });
              }}
              // 물결처럼 퍼져나가는 애니메이션
              icon={{
                content: `
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#18A402" fill-opacity="0.2"/>
                <circle cx="20" cy="20" r="13" stroke="#18A402" stroke-width="2"/>
                <circle cx="20" cy="20" r="9" fill="#18A402"/>
                </svg>
                `,
                anchor: new navermaps.Point(10, 10),
              }}
            />
          );
        })}

        {offset.x && offset.y && (
          <ModalPanel x={offset.x} y={offset.y}>
            {selectedMarker !== null && selectedMarker !== undefined && (
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="overflow-hidden w-[130px] h-[80px] rounded-lg">
                    <Image
                      src={collectionList[selectedMarker].img[0]}
                      alt=""
                      width={132}
                      height={132}
                    />
                  </div>
                  <div className="font-bold text-sm">
                    {collectionList[selectedMarker].title}
                  </div>
                  <div className="font-normal text-xs">
                    {collectionList[selectedMarker].description}
                  </div>
                </div>
                <button
                  className="w-full h-10 bg-[#FFD600] rounded-lg text-white font-bold"
                  onClick={() => {
                    router.push(`/member/${collectionList[selectedMarker].id}`);
                  }}
                >
                  더보기
                </button>
              </div>
            )}
          </ModalPanel>
        )}
      </NaverMap>
      <div className="fixed bottom-[136px] right-[24px] flex flex-col gap-[17px]">
        <button
          className="w-[60px] h-[60px] bg-white flex justify-center rounded-full items-center shadow-lg"
          onClick={() => {
            if (!userInformation) return alert("로그인 후 이용해주세요");
            setFilterList([
              ...collectionList.filter(
                (item) => item.userEmail === userInformation.email
              ),
            ]);
          }}
        >
          <svg
            width="22"
            height="27"
            viewBox="0 0 22 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.73739 26.549C1.99931 26.5075 2.23402 26.3636 2.38987 26.1489L7.89229 18.5706L9.32701 19.653C10.4115 20.4888 11.7828 20.8601 13.1401 20.6855C13.5907 20.6156 14.0261 20.4689 14.4271 20.2518C15.0477 19.9218 15.5592 19.4185 15.8995 18.803C16.2397 18.1876 16.3941 17.4864 16.3439 16.7847C16.2925 15.7651 16.0578 14.7631 15.6512 13.8267L15.2769 12.8299C15.2108 12.6715 15.1865 12.4988 15.2063 12.3283C15.2262 12.1578 15.2895 11.9952 15.3902 11.8563L16.7093 10.0384C16.7613 9.96644 16.8394 9.91772 16.9268 9.90261C16.9566 9.89202 16.9888 9.88998 17.0197 9.89673C17.0507 9.90347 17.0791 9.91873 17.1019 9.94078C17.6813 10.3889 18.4013 10.6156 19.1326 10.5802C19.8638 10.5448 20.5584 10.2495 21.0916 9.74745C21.4027 9.44173 21.6435 9.07178 21.7971 8.66338C21.9508 8.25497 22.0136 7.81792 21.9813 7.38266C21.949 6.9474 21.8222 6.5244 21.6099 6.14311C21.3976 5.76183 21.1049 5.43142 20.752 5.1749L15.1216 1.0765C14.5415 0.643412 13.8278 0.42814 13.1054 0.468321C12.383 0.508502 11.6977 0.801581 11.1694 1.29632C10.8582 1.60197 10.6174 1.97187 10.4636 2.38025C10.3099 2.78863 10.2469 3.22568 10.2792 3.66096C10.3114 4.09623 10.4381 4.51927 10.6503 4.90061C10.8625 5.28195 11.1552 5.61243 11.5081 5.86902L11.595 5.93228C11.6606 5.98038 11.7046 6.05247 11.7173 6.13285C11.73 6.21323 11.7104 6.29538 11.6629 6.36137L10.3328 8.19325C10.2307 8.33352 10.0939 8.44481 9.9359 8.51618C9.77786 8.58755 9.60399 8.61656 9.43134 8.60035L8.5917 8.52137C7.55806 8.4189 6.51448 8.50399 5.51115 8.77255C4.79938 8.96204 4.15664 9.35127 3.65868 9.89437C3.16072 10.4375 2.8283 11.1118 2.70062 11.8378C2.55434 12.5863 2.62471 13.3612 2.90346 14.0711C3.18221 14.7811 3.65774 15.3966 4.27408 15.8453L6.29511 17.37L0.772109 24.9718C0.655891 25.1319 0.58972 25.3229 0.58196 25.5207C0.574201 25.7185 0.625202 25.9142 0.728515 26.083C0.831829 26.2518 0.982816 26.3862 1.16239 26.4691C1.34196 26.5521 1.54206 26.5799 1.73739 26.549ZM4.6666 12.2018C4.72462 11.8474 4.88405 11.5174 5.12558 11.2518C5.36712 10.9863 5.6804 10.7965 6.02751 10.7055C6.25116 10.6459 6.47774 10.5979 6.70636 10.5617C7.2667 10.4731 7.83612 10.4569 8.40063 10.5136L9.24635 10.5926C9.76432 10.64 10.2857 10.5522 10.7596 10.3378C11.2335 10.1234 11.6437 9.78972 11.9504 9.36933L13.2805 7.53745C13.6392 7.04188 13.7869 6.42412 13.6913 5.81957C13.5956 5.21503 13.2645 4.67302 12.7703 4.31237L12.6834 4.2491C12.5649 4.16315 12.4668 4.05225 12.3958 3.92422C12.3249 3.79619 12.2828 3.65415 12.2726 3.5081C12.2625 3.36206 12.2844 3.21557 12.337 3.07896C12.3895 2.94235 12.4714 2.81896 12.5767 2.71746C12.7673 2.55641 13.0075 2.46608 13.2569 2.46171C13.5063 2.45733 13.7496 2.53918 13.9458 2.69345L19.5793 6.79237C19.6978 6.87832 19.7959 6.98922 19.8669 7.11725C19.9378 7.24528 19.9799 7.38733 19.9901 7.53337C20.0002 7.67942 19.9783 7.82591 19.9257 7.96251C19.8732 8.09912 19.7913 8.22252 19.686 8.32401C19.4934 8.48717 19.25 8.57803 18.9977 8.58095C18.7454 8.58387 18.4999 8.49867 18.3035 8.34002C18.0671 8.16242 17.7976 8.03403 17.5108 7.96242C17.224 7.89082 16.9259 7.87745 16.6339 7.92311C16.0186 8.02332 15.4664 8.35926 15.0944 8.85983L13.7761 10.6767C13.4767 11.0892 13.2873 11.5714 13.2257 12.0776C13.164 12.5838 13.2322 13.0974 13.4238 13.57L13.8056 14.5818C14.1255 15.3129 14.3114 16.0957 14.3544 16.8927C14.3814 17.2163 14.3128 17.5406 14.1571 17.8254C14.0015 18.1102 13.7657 18.3429 13.4789 18.4946C12.9947 18.7075 12.4601 18.7787 11.937 18.7C11.4139 18.6214 10.9237 18.396 10.5232 18.0501L5.46572 14.239C5.15193 14.0114 4.90989 13.6985 4.76826 13.3374C4.62663 12.9763 4.59135 12.5822 4.6666 12.2018V12.2018Z"
              fill="#0B4901"
            />
          </svg>
        </button>
        <button
          className="w-[60px] h-[60px] bg-green-500 flex justify-center rounded-full items-center shadow-lg"
          onClick={() => {
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
      </div>
    </MapDiv>
  );
};

export default PlanzyMap;

const ModalPanel = styled.div<{ x: number; y: number }>`
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  width: 150px;
  height: 200px;
  background-color: white;
  z-index: 1000;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const FormBox = styled.div`
  border-radius: 10px;
  border: 1px solid #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 0 16px;
`;

const CustomInput = styled.input`
  color: #212121;
  font-family: Pretendard Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;
  &::placeholder {
    color: #bdbdbd;
  }
`;
