import Breadcrumb from "@/app/components/ui/BreadCrumb";
import Header from "../../components/ui/Header";
import Navbar from "../../components/ui/Navbar";
import { ProductSlugTransfer } from "@/app/utils/productSlugTransfer";
import ProductDetails from "@/app/components/ProductDetails";
import RatingReviews from "@/app/components/RatingReviews";
import Footer from "@/app/components/Footer";
import SimilarItems from "@/app/components/SimilarItems";
import { MOCK } from "@/app/lib/mockProducts";

const baseCrumbs = [
  { label: "Home", href: "/" },
  { label: "Our Category", href: "/ourCategory" },
];

export default async function Page({
  params,
}: {
  params: { productSlug: string };
}) {
  const productSlug = await params.productSlug;
  const crumbs = [
    ...baseCrumbs,
    {
      label: ProductSlugTransfer(productSlug),
      href: `/${productSlug}`,
    },
  ];

  return (
    <>
      <Navbar />
      <Header title={productSlug} />
      <Breadcrumb items={crumbs} />
      <ProductDetails productSlug={productSlug} />
      <RatingReviews />
      <SimilarItems items={MOCK} />
      <Footer />
    </>
  );
}
