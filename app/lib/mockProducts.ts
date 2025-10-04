import { Product } from "../types/similarItems";
import address1 from "@/public/similar-items/dress_1.png";
import shirt2 from "@/public/similar-items/shirt_2.png";
import shirt3 from "@/public/similar-items/shirt_3.png";
import shirt4 from "@/public/similar-items/4.png";

export const MOCK: Product[] = [
  {
    id: "1",
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
    category: "Dresses",
    image: address1,
    price: 900,
    rating: 4.5,
    reviews: 2910,
    colors: ["#1E1E1E", "#BDA49D", "#8E8E8E", "#C9C9C9", "#D8D8D8"],
  },
  {
    id: "2",
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
    category: "Dresses",
    image: shirt2,
    price: 900,
    compareAtPrice: 1300,
    discountLabel: "25% OFF",
    rating: 4.5,
    reviews: 2910,
    colors: ["#8D6E63", "#C0C0C0", "#444", "#C9B8A9"],
  },
  {
    id: "3",
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
    category: "Dresses",
    image: shirt3,
    price: 900,
    rating: 4.5,
    reviews: 2910,
    colors: ["#3C3127", "#DCDCDC", "#555"],
  },
  {
    id: "4",
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
    category: "Dresses",
    image: shirt4,
    price: 900,
    compareAtPrice: 1300,
    discountLabel: "25% OFF",
    rating: 4.5,
    reviews: 2910,
    colors: ["#B9BDC7", "#3F3F3F", "#9B9B9B", "#E1E1E1"],
  },
  {
    id: "5",
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
    category: "Dresses",
    image: shirt4,
    price: 900,
    compareAtPrice: 1300,
    discountLabel: "25% OFF",
    rating: 4.5,
    reviews: 2910,
    colors: ["#B9BDC7", "#3F3F3F", "#9B9B9B", "#E1E1E1"],
  },
];
