import { Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export const Header = () => (
  <div className="flex justify-between items-center">
    <div>
      <h1 className="text-4xl font-bold">Lista de compras</h1>
      <p>Gerencie sua lista de compras de maneira fácil</p>
    </div>
    <Button asChild className="h-full">
      <Link href="/insert-product">
        <Plus />
        Adicionar produto
      </Link>
    </Button>
  </div>
);
