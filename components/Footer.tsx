"use client";
import { useRouter } from "next/navigation";
import { loginState } from "@/states";
import { useRecoilState } from "recoil";
import toast from "react-hot-toast";
import Marker from "./svg/Marker";
import Friends from "./svg/Friends";
import QR from "./svg/QR";

export default function Footer() {
  const [isLoggedIn] = useRecoilState(loginState);
  const router = useRouter();
  return (
    <footer className="w-full flex h-[104px] items-center border-t fixed bottom-0 z-10 bg-white rounded-t-[16px]">
      <div
        className="flex-1 flex h-full justify-center items-center hover:bg-slate-100"
        onClick={() => {
          if (!isLoggedIn) {
            toast.error("로그인이 필요합니다!", {
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
          router.push("/map");
        }}
      >
        <Marker />
      </div>
      <div
        className="flex-1 flex h-full justify-center items-center hover:bg-slate-100"
        onClick={() => {
          if (!isLoggedIn) {
            toast.error("로그인이 필요합니다!", {
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
          router.push("/camera");
        }}
      >
        <QR />
      </div>
      <div
        className="flex-1 flex h-full justify-center items-center hover:bg-slate-100"
        onClick={() => {
          if (!isLoggedIn) {
            toast.error("로그인이 필요합니다!", {
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
          router.push("/friends");
        }}
      >
        <Friends />
      </div>
    </footer>
  );
}
