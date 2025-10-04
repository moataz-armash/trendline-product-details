import { img } from "../lib/productGalleryImages";
import ProductDescription from "./ProductDescription";
import ProductGallery from "./ProductGallery";

export default function ProductDetails({
  productSlug,
}: {
  productSlug: string;
}) {
  return (
    <div className="flex flex-col items-stretch md:flex-row py-2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 gap-4">
      <ProductGallery images={img} />
      <ProductDescription productSlug={productSlug} />
    </div>
  );
}
