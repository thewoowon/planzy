"use client";

import Apple from "@/components/svg/Apple";
import FaceBook from "@/components/svg/FaceBook";
import Google from "@/components/svg/Google";
import { EMAIL_REGEX, PASSWORD_REGEX } from "@/constants/auth/regex";
import { userState } from "@/states";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRecoilState } from "recoil";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [, setUserInformation] = useRecoilState(userState);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { email, password } = data;
    if (!email) {
      return toast.error("이메일을 입력해주세요!", {
        icon: "😥",
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "#FF0000",
          color: "#fff",
        },
      });
    }

    if (!password) {
      return toast.error("비밀번호를 입력해주세요!", {
        icon: "😥",
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "#FF0000",
          color: "#fff",
        },
      });
    }

    localStorage.setItem("token", "token");

    setUserInformation({
      email,
      name: "Planzy",
      token: "token",
    });

    toast.success("로그인 완료!", {
      icon: "🥳",
      position: "top-center",
      style: {
        borderRadius: "10px",
        background: "#18A402",
        color: "#fff",
      },
    });
    router.push("/");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-[17px] py-[42px] bg-[#E9F5EF] h-screen justify-between flex flex-col"
    >
      <div>
        <div className="flex items-center gap-[16px] px-[17px] py-[36px]">
          <svg
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 17L1 9L10 0.999999"
              stroke="#244A2A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Link href="/signup">
            <LinkText className="">회원가입 하러갈래요!</LinkText>
          </Link>
        </div>
        <div className="px-[17px]">
          <Title fontSize="16px" color="#18A402">
            만나서 반가워요!
          </Title>
          <Title fontSize="24px">로그인을 해주세요</Title>
        </div>
        <div className="pt-6">
          <CustomInput
            {...register("email", {
              required: "이메일을 입력하세요",
              pattern: EMAIL_REGEX,
            })}
            placeholder="이메일을 입력해주세요."
            defaultValue={"planzy@planzy.com"}
            name="email"
            type="text"
            required
            autoComplete="true"
          />
          <CustomInput
            {...register("password", {
              required: "비밀번호를 입력해주세요",
              pattern: PASSWORD_REGEX,
            })}
            placeholder="비밀번호를 입력해주세요."
            type="password"
            defaultValue={"Ww123456!!"}
            name="password"
            required
            autoComplete="true"
          />
        </div>

        <div className="mt-[37px] flex justify-between px-[12px]">
          <Title fontSize="12px" color="#747980">
            인증번호가 오지 않나요?
          </Title>
          <Title
            fontSize="12px"
            color="#18A402"
            style={{
              textDecoration: "underline",
            }}
          >
            비밀번호를 잊어버렸어요
          </Title>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <Button
          type="button"
          className="py-4"
          onClick={() => {
            router.push("/auth/social");
          }}
          style={{
            backgroundColor: "#FFED4F",
          }}
          color="#000000"
        >
          카카오톡 로그인
        </Button>
        <Button
          type="submit"
          className="py-4"
          style={{
            backgroundColor: "#18A402",
          }}
        >
          로그인
        </Button>
      </div>
    </form>
  );
};

export default Login;

const LinkText = styled.div`
  color: var(--text-placeholder, #747980);
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Title = styled.div<{
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}>`
  color: ${({ color }) => color || "var(--black-white-black, #212121)"};
  font-family: SUIT;
  font-size: ${({ fontSize }) => fontSize || "18px"};
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || "600"};
  line-height: 150%; /* 24px */
`;

const CustomInput = styled.input`
  border-radius: 16px;
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
