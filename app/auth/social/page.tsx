import Image from "next/image";

const KakaoTalkPage = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center pb-[160px]">
      <Image src={"/prodo.png"} alt="prodo" width={160} height={160} />
    </div>
  );
};

export default KakaoTalkPage;
