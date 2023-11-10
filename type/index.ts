export type LatLng = {
  id: number;
  userEmail: string;
  grd_la: number;
  grd_lo: number;
  latlng: string;
  title: string;
  description: string;
  tag: string[];
  address: string;
  phone: string;
  time: string;
  holiday: string;
  homepage: string;
  sns: string;
  img: string[];
  children: {
    id: number;
    img: string;
    title: string;
    description: string;
    distance: string;
    tag: string[];
  }[];
  story: {
    id: number;
    title: string;
    imageUrl: string;
    tag: string[];
    duration: number;
  }[];
};
