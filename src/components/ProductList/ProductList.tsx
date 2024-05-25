import { ProductItem } from "./ProductItem";
import { Product } from "./types";

export const ProductList = async () => {
  const response = await fetch("http://localhost:3333/products", {
    next: {
      tags: ["product-list"],
    },
  });
  const data = (await response.json()) as Product[];

  return (
    <div className="flex flex-col gap-4">
      {data.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};
