import { LatLng } from "./../type/index";
export const sideProfileList = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "My Page",
    link: "/mypage",
  },
  {
    title: "instagram",
    link: "https://instagram.com",
  },
];

// 33.4707849, 126.4922485; // 엔젤리너스
// 33.4715835, 126.4915281; // 장가네 부엌
// 33.469955, 126.4894937; // 트러스데이
// 33.4720684, 126.4898611; // 광진주택
// 33.4737433, 126.4884714; // 화목원
// 33.47052, 126.4909; // 이름 모를 주차장
// 33.4699443, 126.4887026; // 예쁜 나무 숨겨놈

export const dummyLatLng: LatLng[] = [
  {
    id: 1,
    userEmail: "planzy@planzy.com",
    grd_la: 33.469955,
    grd_lo: 126.4894937,
    latlng: "33.4699550, 126.4894937", // 트러스데이
    title: "트러스데이",
    description: "트러스데이",
    tag: ["실내공원", "온실", "데이트", "커피"],
    address: "제주특별자치도 제주시 오남로 15",
    phone: "064-757-7770",
    time: "10:00 ~ 22:00",
    holiday: "연중무휴",
    homepage: "https://www.instagram.com/trustday_jeju/",
    sns: "https://www.instagram.com/trustday_jeju/",
    img: [
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/c419e306-1e38-4270-ceb9-afd608e13800/public",
    ],
    children: [
      {
        id: 1,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/00e12766-d8a6-4791-9d7f-bc4323f75c00/public",
        title: "장작이",
        description: "작고 소중해요.",
        distance: "1000",
        tag: ["실내공원", "온실", "데이트", "커피"],
      },
      {
        id: 2,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/92049111-1042-4c48-d169-0a668a1a1400/public",
        title: "말랑이",
        description: "말랑말랑",
        distance: "500",
        tag: ["사막", "여름", "사계절", "여유"],
      },
      {
        id: 3,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/4e3868db-9cce-453d-3c3d-6229e3e64600/public",
        title: "뾰족이",
        description: "작지만 센치해",
        distance: "600",
        tag: ["열대", "감성카페", "꾸미기", "이름좋아"],
      },
    ],
    story: [
      {
        id: 1,
        title: "다육이와 함께하는 하루",
        imageUrl: "/story_1.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
      {
        id: 2,
        title: "라벤더와 함께하는 하루",
        imageUrl: "/story_2.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
      {
        id: 3,
        title: "로즈마리와 함께하는 하루",
        imageUrl: "/story_3.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
    ],
  },
  {
    id: 2,
    userEmail: "planzy@planzy.com",
    grd_la: 33.4700346,
    grd_lo: 126.4932767,
    latlng: "33.4700346, 126.4932767", // 한라 수목원
    title: "한라 수목원",
    description: "한라 수목원",
    tag: ["실내공원", "온실", "데이트", "커피"],
    address: "제주특별자치도 제주시 오남로 15",
    phone: "064-757-7770",
    time: "10:00 ~ 22:00",
    holiday: "연중무휴",
    homepage: "https://www.instagram.com/trustday_jeju/",
    sns: "https://www.instagram.com/trustday_jeju/",
    img: [
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/e1a7b0e5-36af-4ec9-e350-885dcc9d3700/public",
    ],
    children: [
      {
        id: 1,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/00e12766-d8a6-4791-9d7f-bc4323f75c00/public",
        title: "장작이",
        description: "작고 소중해요.",
        distance: "1000",
        tag: ["실내공원", "온실", "데이트", "커피"],
      },
      {
        id: 2,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/92049111-1042-4c48-d169-0a668a1a1400/public",
        title: "말랑이",
        description: "말랑말랑",
        distance: "500",
        tag: ["사막", "여름", "사계절", "여유"],
      },
      {
        id: 3,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/4e3868db-9cce-453d-3c3d-6229e3e64600/public",
        title: "뾰족이",
        description: "작지만 센치해",
        distance: "600",
        tag: ["열대", "감성카페", "꾸미기", "이름좋아"],
      },
    ],
    story: [
      {
        id: 1,
        title: "다육이와 함께하는 하루",
        imageUrl: "/story_1.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
      {
        id: 2,
        title: "라벤더와 함께하는 하루",
        imageUrl: "/story_2.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
      {
        id: 3,
        title: "로즈마리와 함께하는 하루",
        imageUrl: "/story_3.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
    ],
  },
  {
    id: 3,
    userEmail: "planzy@planzy.com",
    grd_la: 33.4707849,
    grd_lo: 126.4922485,
    latlng: "33.4707849, 126.4922485", // 엔젤리너스
    title: "엔젤리너스",
    description: "엔젤리너스",
    tag: ["실내공원", "온실", "데이트", "커피"],
    address: "제주특별자치도 제주시 오남로 15",
    phone: "064-757-7770",
    time: "10:00 ~ 22:00",
    holiday: "연중무휴",
    homepage: "https://www.instagram.com/trustday_jeju/",
    sns: "https://www.instagram.com/trustday_jeju/",
    img: [
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/657d69ec-f62a-4996-bf8f-c814519f7900/public",
    ],
    children: [
      {
        id: 1,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/00e12766-d8a6-4791-9d7f-bc4323f75c00/public",
        title: "장작이",
        description: "작고 소중해요.",
        distance: "1000",
        tag: ["실내공원", "온실", "데이트", "커피"],
      },
      {
        id: 2,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/92049111-1042-4c48-d169-0a668a1a1400/public",
        title: "말랑이",
        description: "말랑말랑",
        distance: "500",
        tag: ["사막", "여름", "사계절", "여유"],
      },
      {
        id: 3,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/4e3868db-9cce-453d-3c3d-6229e3e64600/public",
        title: "뾰족이",
        description: "작지만 센치해",
        distance: "600",
        tag: ["열대", "감성카페", "꾸미기", "이름좋아"],
      },
    ],
    story: [
      {
        id: 1,
        title: "다육이와 함께하는 하루",
        imageUrl: "/story_1.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
      {
        id: 2,
        title: "라벤더와 함께하는 하루",
        imageUrl: "/story_2.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
      {
        id: 3,
        title: "로즈마리와 함께하는 하루",
        imageUrl: "/story_3.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
    ],
  },
  {
    id: 4,
    userEmail: "planzy@planzy.com",
    grd_la: 33.4715835,
    grd_lo: 126.4915281,
    latlng: "33.4715835, 126.4915281", // 장가네 부엌
    title: "장가네 부엌",
    description: "장가네 부엌",
    tag: ["실내공원", "온실", "데이트", "커피"],
    address: "제주특별자치도 제주시 오남로 15",
    phone: "064-757-7770",
    time: "10:00 ~ 22:00",
    holiday: "연중무휴",
    homepage: "https://www.instagram.com/trustday_jeju/",
    sns: "https://www.instagram.com/trustday_jeju/",
    img: [
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/1a1afb50-1659-4381-bb21-777445bce900/public",
    ],
    children: [
      {
        id: 1,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/00e12766-d8a6-4791-9d7f-bc4323f75c00/public",
        title: "장작이",
        description: "작고 소중해요.",
        distance: "1000",
        tag: ["실내공원", "온실", "데이트", "커피"],
      },
      {
        id: 2,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/92049111-1042-4c48-d169-0a668a1a1400/public",
        title: "말랑이",
        description: "말랑말랑",
        distance: "500",
        tag: ["사막", "여름", "사계절", "여유"],
      },
      {
        id: 3,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/4e3868db-9cce-453d-3c3d-6229e3e64600/public",
        title: "뾰족이",
        description: "작지만 센치해",
        distance: "600",
        tag: ["열대", "감성카페", "꾸미기", "이름좋아"],
      },
    ],
    story: [
      {
        id: 1,
        title: "다육이와 함께하는 하루",
        imageUrl: "/story_1.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
      {
        id: 2,
        title: "라벤더와 함께하는 하루",
        imageUrl: "/story_2.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
      {
        id: 3,
        title: "로즈마리와 함께하는 하루",
        imageUrl: "/story_3.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
    ],
  },
  {
    id: 5,
    userEmail: "planzy2@planzy.com",
    grd_la: 33.4711887,
    grd_lo: 126.4936699,
    latlng: "33.4711887, 126.4936699", //
    title: "그리드",
    description: "카페 그리드",
    tag: ["실내공원", "온실", "데이트", "커피"],
    address: "제주특별자치도 제주시 오남로 15",
    phone: "064-757-7770",
    time: "10:00 ~ 22:00",
    holiday: "연중무휴",
    homepage: "https://www.instagram.com/trustday_jeju/",
    sns: "https://www.instagram.com/trustday_jeju/",
    img: [
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/a066f69a-6812-4832-fa8a-3a0a809ff600/public",
    ],
    children: [
      {
        id: 1,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/00e12766-d8a6-4791-9d7f-bc4323f75c00/public",
        title: "장작이",
        description: "작고 소중해요.",
        distance: "1000",
        tag: ["실내공원", "온실", "데이트", "커피"],
      },
      {
        id: 2,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/92049111-1042-4c48-d169-0a668a1a1400/public",
        title: "말랑이",
        description: "말랑말랑",
        distance: "500",
        tag: ["사막", "여름", "사계절", "여유"],
      },
      {
        id: 3,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/4e3868db-9cce-453d-3c3d-6229e3e64600/public",
        title: "뾰족이",
        description: "작지만 센치해",
        distance: "600",
        tag: ["열대", "감성카페", "꾸미기", "이름좋아"],
      },
    ],
    story: [
      {
        id: 1,
        title: "다육이와 함께하는 하루",
        imageUrl: "/story_1.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
      {
        id: 2,
        title: "라벤더와 함께하는 하루",
        imageUrl: "/story_2.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
      {
        id: 3,
        title: "로즈마리와 함께하는 하루",
        imageUrl: "/story_3.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
    ],
  },
  {
    id: 6,
    userEmail: "planzy1@planzy.com",
    grd_la: 33.4720684,
    grd_lo: 126.4898611,
    latlng: "33.4720684, 126.4898611", // 광진주택
    title: "광진주택",
    description: "광진주택이라는 이름에 식물이 가득!",
    tag: ["실내공원", "온실", "데이트", "커피"],
    address: "제주특별자치도 제주시 오남로 15",
    phone: "064-757-7770",
    time: "10:00 ~ 22:00",
    holiday: "연중무휴",
    homepage: "https://www.instagram.com/trustday_jeju/",
    sns: "https://www.instagram.com/trustday_jeju/",
    img: [
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/fba36348-7316-4a4d-a61b-fcceee288000/public",
    ],
    children: [
      {
        id: 1,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/00e12766-d8a6-4791-9d7f-bc4323f75c00/public",
        title: "장작이",
        description: "작고 소중해요.",
        distance: "1000",
        tag: ["실내공원", "온실", "데이트", "커피"],
      },
      {
        id: 2,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/92049111-1042-4c48-d169-0a668a1a1400/public",
        title: "말랑이",
        description: "말랑말랑",
        distance: "500",
        tag: ["사막", "여름", "사계절", "여유"],
      },
      {
        id: 3,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/4e3868db-9cce-453d-3c3d-6229e3e64600/public",
        title: "뾰족이",
        description: "작지만 센치해",
        distance: "600",
        tag: ["열대", "감성카페", "꾸미기", "이름좋아"],
      },
    ],
    story: [
      {
        id: 1,
        title: "다육이와 함께하는 하루",
        imageUrl: "/story_1.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
      {
        id: 2,
        title: "라벤더와 함께하는 하루",
        imageUrl: "/story_2.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
      {
        id: 3,
        title: "로즈마리와 함께하는 하루",
        imageUrl: "/story_3.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
    ],
  },
  {
    id: 7,
    userEmail: "planzy@planzy.com",
    grd_la: 33.4737433,
    grd_lo: 126.4884714,
    latlng: "33.4737433, 126.4884714", // 화목원
    title: "화목원",
    description: "화목원",
    tag: ["실내공원", "온실", "데이트", "커피"],
    address: "제주특별자치도 제주시 오남로 15",
    phone: "064-757-7770",
    time: "10:00 ~ 22:00",
    holiday: "연중무휴",
    homepage: "https://www.instagram.com/trustday_jeju/",
    sns: "https://www.instagram.com/trustday_jeju/",
    img: [
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/a45dda32-c749-40df-8d02-a83ca7fffa00/public",
    ],
    children: [
      {
        id: 1,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/00e12766-d8a6-4791-9d7f-bc4323f75c00/public",
        title: "장작이",
        description: "작고 소중해요.",
        distance: "1000",
        tag: ["실내공원", "온실", "데이트", "커피"],
      },
      {
        id: 2,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/92049111-1042-4c48-d169-0a668a1a1400/public",
        title: "말랑이",
        description: "말랑말랑",
        distance: "500",
        tag: ["사막", "여름", "사계절", "여유"],
      },
      {
        id: 3,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/4e3868db-9cce-453d-3c3d-6229e3e64600/public",
        title: "뾰족이",
        description: "작지만 센치해",
        distance: "600",
        tag: ["열대", "감성카페", "꾸미기", "이름좋아"],
      },
    ],
    story: [
      {
        id: 1,
        title: "다육이와 함께하는 하루",
        imageUrl: "/story_1.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
      {
        id: 2,
        title: "라벤더와 함께하는 하루",
        imageUrl: "/story_2.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
      {
        id: 3,
        title: "로즈마리와 함께하는 하루",
        imageUrl: "/story_3.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
    ],
  },
  {
    id: 8,
    userEmail: "planzy@planzy.com",
    grd_la: 33.47052,
    grd_lo: 126.4909,
    latlng: "33.47052, 126.4909", // 이름 모를 주차장
    title: "이름 모를 주차장",
    description: "주차장이름이 뭐지?",
    tag: ["실내공원", "온실", "데이트", "커피"],
    address: "제주특별자치도 제주시 오남로 15",
    phone: "064-757-7770",
    time: "10:00 ~ 22:00",
    holiday: "연중무휴",
    homepage: "https://www.instagram.com/trustday_jeju/",
    sns: "https://www.instagram.com/trustday_jeju/",
    img: [
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/e43a06c6-fc0c-4ded-bb59-5723da382300/public",
    ],
    children: [
      {
        id: 1,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/00e12766-d8a6-4791-9d7f-bc4323f75c00/public",
        title: "장작이",
        description: "작고 소중해요.",
        distance: "1000",
        tag: ["실내공원", "온실", "데이트", "커피"],
      },
      {
        id: 2,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/92049111-1042-4c48-d169-0a668a1a1400/public",
        title: "말랑이",
        description: "말랑말랑",
        distance: "500",
        tag: ["사막", "여름", "사계절", "여유"],
      },
      {
        id: 3,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/4e3868db-9cce-453d-3c3d-6229e3e64600/public",
        title: "뾰족이",
        description: "작지만 센치해",
        distance: "600",
        tag: ["열대", "감성카페", "꾸미기", "이름좋아"],
      },
    ],
    story: [
      {
        id: 1,
        title: "다육이와 함께하는 하루",
        imageUrl: "/story_1.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
      {
        id: 2,
        title: "라벤더와 함께하는 하루",
        imageUrl: "/story_2.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
      {
        id: 3,
        title: "로즈마리와 함께하는 하루",
        imageUrl: "/story_3.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
    ],
  },
  {
    id: 9,
    userEmail: "planzy@planzy.com",
    grd_la: 33.4699443,
    grd_lo: 126.4887026,
    latlng: "33.4699443, 126.4887026", // 예쁜 나무 숨겨놈
    title: "카페 애쉬",
    description: "나무가 예쁘다.",
    tag: ["실내공원", "온실", "데이트", "커피"],
    address: "제주특별자치도 제주시 오남로 15",
    phone: "064-757-7770",
    time: "10:00 ~ 22:00",
    holiday: "연중무휴",
    homepage: "https://www.instagram.com/trustday_jeju/",
    sns: "https://www.instagram.com/trustday_jeju/",
    img: [
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/a4ecd9fb-6444-4e29-0719-64ca43901c00/public",
    ],
    children: [
      {
        id: 1,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/00e12766-d8a6-4791-9d7f-bc4323f75c00/public",
        title: "장작이",
        description: "작고 소중해요.",
        distance: "1000",
        tag: ["실내공원", "온실", "데이트", "커피"],
      },
      {
        id: 2,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/92049111-1042-4c48-d169-0a668a1a1400/public",
        title: "말랑이",
        description: "말랑말랑",
        distance: "500",
        tag: ["사막", "여름", "사계절", "여유"],
      },
      {
        id: 3,
        img: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/4e3868db-9cce-453d-3c3d-6229e3e64600/public",
        title: "뾰족이",
        description: "작지만 센치해",
        distance: "600",
        tag: ["열대", "감성카페", "꾸미기", "이름좋아"],
      },
    ],
    story: [
      {
        id: 1,
        title: "다육이와 함께하는 하루",
        imageUrl: "/story_1.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
      {
        id: 2,
        title: "라벤더와 함께하는 하루",
        imageUrl: "/story_2.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
      {
        id: 3,
        title: "로즈마리와 함께하는 하루",
        imageUrl: "/story_3.png",
        tag: ["#깜찍", "#온실", "#데이트", "#커피"],
        duration: 3000,
      },
    ],
  },
];
