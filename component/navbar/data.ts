import React from "react";
import { IconType } from "react-icons";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";

export const listMenu: { title: string; path: string; icon: IconType }[] = [
  {
    title: "HOME",
    path: "/",
    icon: AiIcons.AiFillHome,
  },
  {
    title: "SURAH",
    path: "/quran",
    icon: GiIcons.GiBookmarklet,
  },
  {
    title: "DZIKIR",
    path: "/dzikir",
    icon: AiIcons.AiFillCalculator,
  },
];
