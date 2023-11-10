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
        <CustomInput
          {...register("name", {
            required: "이름을 입력해주세요",
          })}
          placeholder="식물 검색하기"
          defaultValue={"몬스테라 너무 이쁘다 ㅎㅎ"}
          name="name"
          type="text"
          required
          autoComplete="true"
        />
        <CustomInput
          {...register("tag", {
            required: "태그를 입력해주세요",
          })}
          placeholder="태그 추가하기"
          name="tag"
          type="text"
          defaultValue={"#너무_이쁘다 #힐링_그잡채"}
          required
          autoComplete="true"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-2 px-[32px]">
        <Button
          type="submit"
          className="py-4"
          style={{
            fontSize: "18px",
            color: "#18A402",
            backgroundColor: "rgba(24, 164, 2, 0.20)",
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

const CustomInput = styled.input`
  border-radius: 10px;
  border: 1px solid #fff;
  opacity: 0.6;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 16px 0px rgba(1, 74, 0, 0.2);
  padding: 16px 16px;
  margin-bottom: 16px;
  width: 100%;
  height: 48px;
  color: #212121;
  font-family: Pretendard Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;
`;

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
