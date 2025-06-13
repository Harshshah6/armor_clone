import Header from "@/components/Header";
import Product from "@/components/Product";
import ProductHighlights from "@/components/ProductHighlights";
import Reviews from "@/components/Reviews";
import SectionSeperator from "@/components/SectionSeperator";

export default function page() {
  return (
    <main className="overflow-x-hidden max-w-7xl mx-auto">
      <Header />
      <Product />
      <SectionSeperator mainText={"PRODUCT"} secondText={"HIGHLIGHTS"} />
      <ProductHighlights />
      <SectionSeperator mainText={"Reviews"} secondText={"You Definitely Need"} />
      <Reviews />
    </main>
  );
}