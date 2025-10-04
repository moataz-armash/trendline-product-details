import { img } from "../lib/productGalleryImages";
import ProductDescription from "./ProductDescription";
import ProductGallery from "./ProductGallery";

export default function ProductDetails() {
  return (
    <div className="flex flex-col md:flex-row py-2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ProductGallery images={img} />
      <ProductDescription />
    </div>
  );
}
