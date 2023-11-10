"use client";
import GlobalLoading from "@/components/GlobalLoading";
import { loginState } from "@/states";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const Logout = () => {
  const router = useRouter();
  const [, setIsLoggedIn] = useRecoilState(loginState);
  useEffect(() => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    router.push("/");
  }, [router, setIsLoggedIn]);
  return <GlobalLoading />;
};

export default Logout;
