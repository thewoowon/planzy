import styled from "@emotion/styled";
import Link from "next/link";

type LinkTitleProps = {
  title: string;
  hrefLabel: string;
  href: string;
  padding?: string;
};

const LinkTitle = ({ title, hrefLabel, href, padding }: LinkTitleProps) => {
  return (
    <div
      className="w-full flex justify-between"
      style={{
        padding: padding || "0px",
      }}
    >
      <Title>{title}</Title>
      <Link href={href} className="flex items-center justify-center gap-[4px]">
        <LinkLabel>{hrefLabel}</LinkLabel>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.05273 15.0001C4.05297 14.735 4.15848 14.4808 4.34607 14.2934L9.46073 9.17876C9.61555 9.02399 9.73835 8.84024 9.82214 8.638C9.90592 8.43576 9.94905 8.219 9.94905 8.00009C9.94905 7.78119 9.90592 7.56442 9.82214 7.36219C9.73835 7.15995 9.61555 6.9762 9.46073 6.82143L4.35273 1.71009C4.17058 1.52149 4.06978 1.26889 4.07206 1.00669C4.07434 0.744495 4.17951 0.493682 4.36492 0.308274C4.55032 0.122866 4.80114 0.0176971 5.06333 0.0154187C5.32553 0.0131402 5.57813 0.113935 5.76673 0.296093L10.8747 5.40343C11.5616 6.0916 11.9473 7.02416 11.9473 7.99643C11.9473 8.9687 11.5616 9.90125 10.8747 10.5894L5.76007 15.7041C5.62041 15.8438 5.4425 15.9391 5.24877 15.9778C5.05503 16.0165 4.85417 15.997 4.67153 15.9217C4.48888 15.8464 4.33263 15.7187 4.22251 15.5546C4.11238 15.3906 4.0533 15.1977 4.05273 15.0001Z"
            fill="#9E9E9E"
          />
        </svg>
      </Link>
    </div>
  );
};

export default LinkTitle;

const Title = styled.div`
  color: var(--black-white-black, #212121);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 100% */
`;

const LinkLabel = styled.div`
  color: #9e9e9e;
  font-family: Pretendard Variable;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px; /* 100% */
`;

const LinkArrow = styled.div`
  color: #9e9e9e;
  font-family: Pretendard Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px; /* 100% */
  margin-left: 4px;
`;
