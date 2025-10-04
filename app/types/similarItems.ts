import { StaticImageData } from "next/image";

export type Product = {
  id: string;
  title: string;
  category: string;
  image: StaticImageData;
  price: number;
  compareAtPrice?: number;
  rating: number; // 0..5
  reviews: number;
  colors: string[]; // hex values
  discountLabel?: string; // e.g. "25% OFF"
};

export type SimilarItemsProps = { items: Product[] };
