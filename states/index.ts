import { LatLng } from "@/type";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const loginState = atom<boolean>({
  key: "loginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const userState = atom<{
  email: string;
  name: string;
  token: string;
}>({
  key: "userState",
  default: {
    email: "",
    name: "",
    token: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export const selectedState = atom<number>({
  key: "selectedState",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const collectionState = atom<LatLng[]>({
  key: "collectionState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
