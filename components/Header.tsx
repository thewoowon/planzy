"use client";
import {
  IconBaselineDensitySmall,
  IconHome,
  IconCamera,
  IconUser,
  IconLogout,
  IconLogin,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/material";
import { useState } from "react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { loginState } from "@/states";

type HeaderProps = {
  backgroundColor?: string;
};

const Header = ({ backgroundColor = "white" }: HeaderProps) => {
  const [isLoggedIn] = useRecoilState(loginState);
  const [state, setState] = useState(false);
  const router = useRouter();
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  const menuList = [
    { name: "홈", path: "/", icon: <IconHome /> },
    { name: "마이페이지", path: "/myPage", icon: <IconUser /> },
    { name: "카메라", path: "/camera", icon: <IconCamera /> },
    {
      name: isLoggedIn ? "로그아웃" : "로그인",
      path: isLoggedIn ? "/logout" : "/login",
      icon: isLoggedIn ? <IconLogout /> : <IconLogin />,
    },
  ];

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuList.map((menu, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => {
                router.push(`${menu.path}`);
              }}
            >
              <ListItemIcon>
                {
                  // @ts-ignore
                  menu.icon
                }
              </ListItemIcon>
              <ListItemText primary={menu.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <header
      className="flex max-w-6xl justify-between items-center w-full px-[32px] py-5 mx-auto fixed top-0 z-10"
      style={{ backgroundColor: backgroundColor }}
    >
      <Logo
        onClick={() => {
          router.push("/");
        }}
      >
        Planzy
      </Logo>
      <div
        className="hover:bg-slate-200  py-2 rounded-xl duration-200 transition ease-in-out"
        onClick={() => {
          setState(true);
        }}
      >
        <svg
          width="24"
          height="17"
          viewBox="0 0 24 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.99763H23C23.2652 1.99763 23.5196 1.89239 23.7071 1.70508C23.8946 1.51777 24 1.26372 24 0.998813C24 0.733912 23.8946 0.47986 23.7071 0.292546C23.5196 0.105232 23.2652 0 23 0H1C0.734784 0 0.48043 0.105232 0.292893 0.292546C0.105357 0.47986 0 0.733912 0 0.998813C0 1.26372 0.105357 1.51777 0.292893 1.70508C0.48043 1.89239 0.734784 1.99763 1 1.99763Z"
            fill="#374957"
          />
          <path
            d="M23 4.99414H1C0.734784 4.99414 0.48043 5.09937 0.292893 5.28669C0.105357 5.474 0 5.72805 0 5.99295C0 6.25786 0.105357 6.51191 0.292893 6.69922C0.48043 6.88654 0.734784 6.99177 1 6.99177H23C23.2652 6.99177 23.5196 6.88654 23.7071 6.69922C23.8946 6.51191 24 6.25786 24 5.99295C24 5.72805 23.8946 5.474 23.7071 5.28669C23.5196 5.09937 23.2652 4.99414 23 4.99414Z"
            fill="#374957"
          />
          <path
            d="M23 14.9822H1C0.734784 14.9822 0.48043 15.0874 0.292893 15.2747C0.105357 15.462 0 15.7161 0 15.981C0 16.2459 0.105357 16.5 0.292893 16.6873C0.48043 16.8746 0.734784 16.9798 1 16.9798H23C23.2652 16.9798 23.5196 16.8746 23.7071 16.6873C23.8946 16.5 24 16.2459 24 15.981C24 15.7161 23.8946 15.462 23.7071 15.2747C23.5196 15.0874 23.2652 14.9822 23 14.9822Z"
            fill="#374957"
          />
          <path
            d="M23 9.98828H1C0.734784 9.98828 0.48043 10.0935 0.292893 10.2808C0.105357 10.4681 0 10.7222 0 10.9871C0 11.252 0.105357 11.5061 0.292893 11.6934C0.48043 11.8807 0.734784 11.9859 1 11.9859H23C23.2652 11.9859 23.5196 11.8807 23.7071 11.6934C23.8946 11.5061 24 11.252 24 10.9871C24 10.7222 23.8946 10.4681 23.7071 10.2808C23.5196 10.0935 23.2652 9.98828 23 9.98828Z"
            fill="#374957"
          />
        </svg>
      </div>
      <SwipeableDrawer
        anchor={"right"}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </header>
  );
};

export default Header;

const Logo = styled.div`
  color: #18a402;
  text-align: center;
  text-shadow: 0px 0px 5px #fff;
  font-family: Poppins, sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 100% */
`;
