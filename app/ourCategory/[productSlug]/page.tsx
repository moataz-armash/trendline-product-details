import Breadcrumb from "@/app/components/ui/BreadCrumb";
import Header from "../../components/ui/Header";
import Navbar from "../../components/ui/Navbar";
import { ProductSlugTransfer } from "@/app/utils/productSlugTransfer";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Our Category", href: "/ourCategory" },
];

export default function Page({
  params: { productSlug },
}: {
  params: { productSlug: string };
}) {
  crumbs.push({
    label: ProductSlugTransfer(productSlug),
    href: `/${productSlug}`,
  });
  return (
    <>
      <Navbar />
      <Header title={productSlug} />
      <Breadcrumb items={crumbs} />
    </>
  );
}
