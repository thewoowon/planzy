"use client";
import { useParams, useRouter } from "next/navigation";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useRecoilState } from "recoil";
import { collectionState } from "@/states";

const colorList = ["#D2B100", "#007537", "#A49B7A"];

const PlantDetailPage = () => {
  const { id, plantId } = useParams<{
    id: string;
    plantId: string;
  }>();

  const router = useRouter();

  const parsedId = parseInt(id);
  const parsedPlantId = parseInt(plantId);

  const [collectionList] = useRecoilState(collectionState);

  const plant = collectionList[parsedId].children[parsedPlantId];

  if (isNaN(parsedId)) {
    return <div>잘못된 접근입니다.</div>;
  }
  return (
    <div className="pt-[32px] bg-[#E9F5EF] h-screen">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex w-full justify-between px-[32px] items-center">
          <div
            onClick={() => {
              router.back();
            }}
            className="cursor-pointer w-[48px] h-[48px] flex justify-start items-center"
          >
            <svg
              width="13"
              height="24"
              viewBox="0 0 13 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7514 23.982L0.878359 14.109C0.315946 13.5464 0 12.7835 0 11.988C0 11.1925 0.315946 10.4296 0.878359 9.867L10.7454 0L12.1594 1.414L2.29236 11.281C2.10489 11.4685 1.99957 11.7228 1.99957 11.988C1.99957 12.2532 2.10489 12.5075 2.29236 12.695L12.1654 22.568L10.7514 23.982Z"
                fill="#374957"
              />
            </svg>
          </div>
          <Logo
            onClick={() => {
              router.push("/");
            }}
          >
            Planzy
          </Logo>
          <div
            className="p-3 bg-white rounded-full shadow-sm shadow-emerald-500 hover:bg-gray-100 transition duration-200 ease-in-out"
            onClick={() => {
              router.push(`/chat/${id}/${plantId}`);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_52_2964)">
                <path
                  d="M24 16.0001V21.0001C24 21.7958 23.6839 22.5588 23.1213 23.1215C22.5587 23.6841 21.7956 24.0001 21 24.0001H16C14.5971 23.9987 13.2192 23.6284 12.0047 22.9263C10.7901 22.2242 9.78145 21.2151 9.08 20.0001C9.83387 19.9947 10.5852 19.9116 11.322 19.7521C11.8832 20.4538 12.595 21.0202 13.4048 21.4093C14.2146 21.7984 15.1016 22.0004 16 22.0001H21C21.2652 22.0001 21.5196 21.8948 21.7071 21.7072C21.8946 21.5197 22 21.2654 22 21.0001V16.0001C21.9998 15.1014 21.7972 14.2142 21.4074 13.4044C21.0175 12.5946 20.4504 11.8829 19.748 11.3221C19.9088 10.5855 19.9933 9.83414 20 9.08013C21.215 9.78159 22.2241 10.7902 22.9262 12.0048C23.6282 13.2194 23.9986 14.5972 24 16.0001ZM17.977 9.65113C18.0705 8.36277 17.8856 7.06938 17.4348 5.85883C16.9841 4.64828 16.278 3.54896 15.3646 2.63555C14.4512 1.72215 13.3518 1.01607 12.1413 0.56529C10.9308 0.114515 9.63736 -0.0703926 8.349 0.0231331C6.06592 0.283865 3.95693 1.37031 2.41918 3.07788C0.881427 4.78544 0.0210272 6.99631 0 9.29413L0 14.3341C0 16.8661 1.507 18.0001 3 18.0001H8.7C10.9988 17.9804 13.211 17.1205 14.9198 15.5827C16.6286 14.0448 17.7159 11.9352 17.977 9.65113ZM13.95 4.05113C14.6599 4.76264 15.2088 5.61833 15.5593 6.56032C15.9099 7.50231 16.054 8.50861 15.982 9.51113C15.7686 11.2948 14.9105 12.939 13.5693 14.1341C12.2282 15.3292 10.4964 15.9929 8.7 16.0001H3C2.072 16.0001 2 14.7251 2 14.3341V9.29413C2.00834 7.49851 2.67265 5.76784 3.86792 4.42781C5.06319 3.08778 6.70699 2.2308 8.49 2.01813C8.656 2.00613 8.822 2.00013 8.988 2.00013C9.90927 1.99927 10.8217 2.17997 11.6731 2.53189C12.5245 2.88381 13.2982 3.40006 13.95 4.05113Z"
                  fill="#0B4901"
                />
              </g>
              <defs>
                <clipPath id="clip0_52_2964">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="py-[16px]">
          <Image
            src={
              plant.img ||
              "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/f803fd8c-8c35-40e9-1013-da0adea16400/public"
            }
            alt="plant"
            width={250}
            height={268}
          />
        </div>
        <div className="w-full flex gap-2 py-[16px] px-[32px]">
          {plant.tag.map((tag, index) => (
            <Tag
              key={tag}
              backgroundColor={
                colorList.length > index
                  ? colorList[index]
                  : colorList[index % colorList.length]
              }
            >
              {tag}
            </Tag>
          ))}
        </div>
        <OpacityPanel className="flex flex-col gap-2 py-[16px] px-[16px] mx-[16px] overflow-scroll rounded-xl">
          <div className="flex items-baseline gap-2 py-4">
            <Title>{plant.title}</Title>
            <SubTitle>#{plant.tag.join(", #")}</SubTitle>
          </div>
          <Effect>식물원에서 많이 볼 수 있는 열대식물</Effect>
          <Content>{`곰다시 컴퓨터 도서 별하 여우별 소록소록 미쁘다 노트북 안녕 바나나 여우별 미리내 별하 달볓 도르레 이플 아련 가온해 이플 도르레 감또개 아리아 그루잠 예그리나 안녕 사과 다솜 가온해 노트북 나비잠 가온누리 여우별 감사합니다 늘품 도담도담 비나리 책방 산들림 소솜 아슬라 아슬라 아리아 산들림 산들림 우리는 산들림 도서관 함초롱하다 별하 안녕.

미쁘다 별하 감사합니다 아리아 도서 별빛 도르레 예그리나 비나리 안녕 별빛 아름드리 우리는 안녕 우리는 포도 가온해 산들림 컴퓨터 가온해 도서관 나비잠 로운 나비잠 소솜 소록소록 별빛 바람꽃 미리내 별하 아슬라 포도 포도 여우별 노트북 아름드리 가온해 여우별 우리는 소솜 옅구름 아리아 미쁘다 안녕 소솜 컴퓨터 이플 도담도담 바나나 노트북.

함초롱하다 안녕 아리아 도담도담 도담도담 도서관 책방 도서 산들림 늘품 예그리나 함초롱하다 여우비 미리내 별빛 도담도담 도서관 로운 도서관 도담도담 바나나 아름드리 늘품 바람꽃 바나나 곰다시 미쁘다 도르레 포도 노트북 예그리나 별하 아련 별빛 컴퓨`}</Content>
        </OpacityPanel>
      </div>
      <Footer />
    </div>
  );
};

export default PlantDetailPage;

const Title = styled(Box)`
  color: #212121;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 83.333% */
`;

const SubTitle = styled(Box)`
  color: #848484;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
`;

const Logo = styled(Box)`
  color: #18a402;
  text-align: center;
  text-shadow: 0px 0px 5px #fff;
  font-family: Poppins, sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 100% */
`;

const Tag = styled(Box)<{ backgroundColor: string }>`
  color: var(--White, #fff);
  text-align: center;
  font-family: Pretendard Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  border-radius: 4px;
  background: ${(props) => props.backgroundColor};
  padding: 4px 8px;
`;

const OpacityPanel = styled(Box)`
  background: rgba(255, 255, 255, 0.6);
`;

const Effect = styled(Box)`
  color: #212121;
  text-align: left;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  padding: 8px 0px;
`;

const Content = styled(Box)`
  color: #848484;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
`;
