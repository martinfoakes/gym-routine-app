import { StaticImageData } from "next/image";
import dbSkullcrusher from "../../assets/images/db-skullcrush.jpg";

export const pushDayMeta: Array<{
  primaryText: string;
  setAmount: string;
  repAmount: string;
  imgUrl?: string | StaticImageData;
}> = [
  {
    primaryText: "Flat Dumbbell Bench Press",
    setAmount: "3",
    repAmount: "6",
    imgUrl:
      "https://i.shgcdn.com/0c1706b0-37a5-48a4-b1b6-9c732b5d02d2/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  },
  {
    primaryText: "Incline Dumbbell Bench Press",
    setAmount: "3",
    repAmount: "10",
    imgUrl:
      "https://i.shgcdn.com/fb804e90-1738-4f87-a46c-d01040b3a76e/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  },
  {
    primaryText: "Dips",
    setAmount: "3",
    repAmount: "Until failure",
    imgUrl:
      "https://i.shgcdn.com/7f0fb43c-f324-4a00-b46b-5f631e853509/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  },
  {
    primaryText: "Seated Overhead Shoulder Press",
    setAmount: "3",
    repAmount: "8",
    imgUrl:
      "https://i.shgcdn.com/8cdd4abd-0c5a-46f0-aad3-462c9cf9a49f/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  },
  {
    primaryText: "Dumbbell Lateral Raise",
    setAmount: "3",
    repAmount: "12",
    imgUrl:
      "https://i.shgcdn.com/3e7857c6-291e-4121-a9e6-af10f39affc9/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  },
  {
    primaryText: "Dumbbell Chest Flyes",
    setAmount: "2",
    repAmount: "8",
    imgUrl:
      "https://qph.cf2.quoracdn.net/main-qimg-73c83eb3770aeba6a5d65aba4125f073",
  },
  {
    primaryText: "Dumbbell Skullcrushers",
    setAmount: "3",
    repAmount: "15",
    imgUrl: dbSkullcrusher,
  },
  {
    primaryText: "Tricep Pushdowns",
    setAmount: "3",
    repAmount: "10",
    imgUrl:
      "https://i.shgcdn.com/9717db44-3098-49f1-8ad5-2def26d58c7e/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  },
];

export const pullDayMeta: Array<{
  primaryText: string;
  setAmount: string;
  repAmount: string;
  imgUrl?: string | StaticImageData;
}> = [
  {
    primaryText: "Deadlifts",
    setAmount: "3",
    repAmount: "5",
    imgUrl: "",
  },
  {
    primaryText: "Pull Ups",
    setAmount: "3",
    repAmount: "Until failure",
    imgUrl: "",
  },
  {
    primaryText: "Lat Pulldowns",
    setAmount: "3",
    repAmount: "10",
    imgUrl: "",
  },
  {
    primaryText: "Pullovers",
    setAmount: "3",
    repAmount: "10-15",
    imgUrl: "",
  },
  {
    primaryText: "Dumbbell Rows",
    setAmount: "3",
    repAmount: "10",
    imgUrl: "",
  },
  {
    primaryText: "Cable Face Pulls",
    setAmount: "3",
    repAmount: "12",
    imgUrl: "",
  },
  {
    primaryText: "Barbell/Dumbbell Curls",
    setAmount: "3",
    repAmount: "10",
    imgUrl: "",
  },
  {
    primaryText: "Preacher Curls",
    setAmount: "3",
    repAmount: "12-15",
    imgUrl: "",
  },
];
