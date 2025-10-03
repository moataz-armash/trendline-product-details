import { StaticImageData } from "next/image";

type NavItem = {
  name: string;
  href: string;
  current: boolean;
  icon: StaticImageData;
};

type RightSideIcon = {
  icon: StaticImageData;
};

export type { NavItem, RightSideIcon };
