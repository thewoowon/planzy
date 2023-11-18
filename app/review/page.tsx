"use client";

import NavigationHeader from "@/components/NavigationHeader";
import { useForm } from "react-hook-form";
import Image from "next/image";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import toast from "react-hot-toast";
import { useRecoilState } from "recoil";
import { collectionState, selectedState } from "@/states";
import CustomInput from "@/components/CustomInput";

type Inputs = {
  name: string;
  tag: string;
};

const ReviewPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [collectionList, setCollectionState] = useRecoilState(collectionState);
  const [selectedId, setSelectedState] = useRecoilState(selectedState);
  const router = useRouter();

  const onSubmit = (data: Inputs) => {
    const { name, tag } = data;

    toast.success("생성 완료!", {
      icon: "🥳",
      position: "top-center",
      style: {
        borderRadius: "10px",
        background: "#18A402",
        color: "#fff",
      },
    });

    const deepCopy = JSON.parse(JSON.stringify(collectionList));

    deepCopy[selectedId].story.push({
      id: collectionList[selectedId].story.length,
      title: name,
      duration: 2000,
      tag: tag.split(",").map((tag) => tag.trim()),
      imageUrl: "/story_4.png",
    });

    setCollectionState(deepCopy);

    router.push(`member/${selectedId}/info`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-screen flex flex-col items-center justify-center bg-[#E9F5EF]"
    >
      <NavigationHeader title={"리뷰 추가하기"} href="/camera" />

      <div className="p-2 bg-white rounded-lg">
        <Image
          src={
            "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/2287d85e-e923-494b-2b3a-ab1cfc7e8600/public"
          }
          alt=""
          width={253}
          height={253}
        />
      </div>
      <div className="py-[70px] px-[32px]">
        <div className="flex justify-between">
          <CustomInput
            register={register("name", {
              required: "이름을 입력해주세요",
            })}
            placeholder="식물 검색하기"
            name="name"
            type="text"
            required
            autoComplete="off"
            icons={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_142_475)">
                  <path
                    d="M19.7552 18.5781L14.781 13.6039C16.1365 11.946 16.803 9.83063 16.6425 7.69519C16.4821 5.55974 15.507 3.56766 13.919 2.13098C12.331 0.694309 10.2515 -0.0770391 8.1107 -0.0235126C5.96991 0.030014 3.93158 0.90432 2.41734 2.41856C0.903099 3.9328 0.0287933 5.97113 -0.0247333 8.11192C-0.0782598 10.2527 0.693089 12.3322 2.12976 13.9202C3.56644 15.5082 5.55852 16.4833 7.69396 16.6438C9.82941 16.8042 11.9448 16.1377 13.6027 14.7822L18.5768 19.7564C18.734 19.9082 18.9445 19.9922 19.163 19.9903C19.3815 19.9884 19.5905 19.9007 19.745 19.7462C19.8995 19.5917 19.9872 19.3827 19.9891 19.1642C19.991 18.9457 19.907 18.7352 19.7552 18.5781ZM8.33266 15.0006C7.01412 15.0006 5.72519 14.6096 4.62886 13.877C3.53253 13.1445 2.67805 12.1033 2.17347 10.8851C1.66888 9.66693 1.53686 8.32649 1.79409 7.03328C2.05133 5.74008 2.68627 4.55219 3.61862 3.61984C4.55097 2.68749 5.73885 2.05255 7.03206 1.79532C8.32527 1.53808 9.66571 1.6701 10.8839 2.17469C12.1021 2.67927 13.1433 3.53375 13.8758 4.63008C14.6083 5.72641 14.9993 7.01534 14.9993 8.33388C14.9973 10.1014 14.2943 11.7959 13.0445 13.0457C11.7947 14.2955 10.1002 14.9986 8.33266 15.0006Z"
                    fill="#424242"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_142_475">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
          />
        </div>

        <CustomInput
          register={register("tag", {
            required: "태그를 입력해주세요",
          })}
          placeholder="태그 추가하기"
          name="tag"
          type="text"
          required
          autoComplete="off"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-2 px-[32px]">
        <Button
          type="submit"
          className="py-4 text-[#18A402] hover:bg-[#18A402] w-full hover:text-white ease-in-out transition-all duration-200"
          style={{
            fontSize: "18px",
          }}
        >
          리뷰 숏폼 바로 추가하기
        </Button>
      </div>
      <Footer />
    </form>
  );
};

export default ReviewPage;

const Button = styled.button<{
  backgroundColor?: string;
  color?: string;
}>`
  border-radius: 15px;
  color: ${({ color }) => color || "var(--white-black, #ffffff)"};
  font-family: Pretendard Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.02em;
  box-shadow: 0px 0px 16px 0px rgba(93, 85, 11, 0.25);
  width: 100%;
`;
