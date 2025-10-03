import Header from "../../components/ui/Header";
import Navbar from "../../components/ui/Navbar";

export default function Page({
  params: { productSlug },
}: {
  params: { productSlug: string };
}) {
  return (
    <>
      <Navbar />
      <Header title={productSlug} />
    </>
  );
}
