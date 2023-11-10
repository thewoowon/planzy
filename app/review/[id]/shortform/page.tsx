"use client";
import ProgressBar from "@/components/ProgressBar";
import Story from "@/components/Story";
import Heart from "@/components/svg/Heart";
import Send from "@/components/svg/Send";
import styled from "@emotion/styled";
import { useParams, useRouter } from "next/navigation";
import { Router } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type Inputs = {
  chat: string;
};

const stories = [
  {
    id: 1,
    title: "몬스테라 너무 이쁘다 ㅎㅎ",
    imageUrl: "/story_4.png",
    duration: 3000,
  },
];

const ShortFormPage = () => {
  const { id } = useParams();
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [progressBarQueue, setProgressBarQueue] = useState<ReactNode[]>([]);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setProgressBarQueue(
      stories.map((story, index) => {
        return (
          <ProgressBar
            key={story.id}
            duration={story.duration}
            isActive={index === currentStoryIndex}
          />
        );
      })
    );
  }, [currentStoryIndex]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { chat } = data;

    toast.success("전송 완료!", {
      icon: "🥳",
      position: "top-center",
      style: {
        borderRadius: "10px",
        background: "#18A402",
        color: "#fff",
      },
    });
  };

  const handleLike = () => {
    toast.success("좋아요!", {
      icon: "🥳",
      position: "top-center",
      style: {
        borderRadius: "10px",
        background: "#18A402",
        color: "#fff",
      },
    });

    setIsLiked(!isLiked);
  };

  if (!id) {
    return <div>잘못된 접근입니다.</div>;
  }

  return (
    <div className="bg-black h-screen flex justify-center items-center text-white">
      <div className="flex flex-col w-full">
        <div className="flex gap-[2px]">{progressBarQueue}</div>
        {stories.length > 0 && (
          <Story
            story={stories[currentStoryIndex]}
            onNext={() => {
              if (currentStoryIndex + 1 < stories.length) {
                setCurrentStoryIndex(currentStoryIndex + 1);
              } else {
                router.push(`/member/${id}`);
                return;
              }
            }}
            onClose={() => {
              router.push(`/member/${id}`);
              return;
            }}
          />
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex items-center gap-[25px] px-[32px]"
        >
          <CustomInput
            {...register("chat", {
              required: "메세지를 입력하세요",
            })}
            placeholder="다이렉트 메세지"
            name="chat"
            type="text"
            required
            autoComplete="true"
          />
          <button type="button" onClick={handleLike}>
            <Heart fill={isLiked ? "#FF0044" : "white"} />
          </button>
          <button type="submit">
            <Send />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShortFormPage;

const CustomInput = styled.input`
  border-radius: 16px;
  border: 1px solid #fff;
  box-shadow: 0px 4px 16px 0px rgba(1, 74, 0, 0.2);
  padding: 16px 16px;
  flex: 1;
  height: 48px;
  color: white;
  font-family: Pretendard Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;
  background: transparent;
  outline: none;
`;
