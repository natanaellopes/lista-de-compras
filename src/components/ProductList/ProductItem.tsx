import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { currency } from "@/lib/utils";
import { Product } from "./types";

type ProductItemProps = {
  product: Product;
};

export const ProductItem = ({ product }: ProductItemProps) => (
  <Card className="dark:bg-gray-900 bg-gray-100" key={product.id}>
    <CardHeader>
      <CardTitle>{product.name}</CardTitle>
      <CardDescription>
        {product.quantity}x {currency(product.price)}
      </CardDescription>
    </CardHeader>
  </Card>
);
