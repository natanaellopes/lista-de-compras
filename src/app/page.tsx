import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductList, ProductListSkeleton } from "@/components/ProductList";
import { Suspense } from "react";

export default function Component() {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList />
      </Suspense>
      <Footer />
    </div>
  );
}
