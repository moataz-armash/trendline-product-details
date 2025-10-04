import { NavItem, RightSideIcon } from "@/app/types/navbar";

import homeIcon from "@/public/navIcons/home 04.svg";
import ourCategoryIcon from "@/public/navIcons/apps.svg";
import aboutUsIcon from "@/public/navIcons/interactive.svg";
import contactUsIcon from "@/public/navIcons/id card.svg";
import faqsIcon from "@/public/navIcons/chat-information.svg";
import shoppingBag from "@/public/rightSideIcons/shopping bag.svg";
import notification from "@/public/rightSideIcons/notification 03.svg";
import favorite from "@/public/rightSideIcons/love.svg";

const languages = ["EN", "AR", "TR"];

const navigation: NavItem[] = [
  { name: "Home", href: "/", current: true, icon: homeIcon },
  {
    name: "Our Category",
    href: "/ourCategory",
    current: false,
    icon: ourCategoryIcon,
  },
  { name: "About Us", href: "/aboutus", current: false, icon: aboutUsIcon },
  {
    name: "Contact Us",
    href: "/contactus",
    current: false,
    icon: contactUsIcon,
  },
  { name: "FAQs", href: "/faqs", current: false, icon: faqsIcon },
];

const rightSideIcons: RightSideIcon[] = [
  {
    icon: shoppingBag,
  },
  {
    icon: notification,
  },
  {
    icon: favorite,
  },
];

export { languages, navigation, rightSideIcons };
