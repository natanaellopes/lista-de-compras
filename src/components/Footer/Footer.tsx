import { Receipt, ShoppingBag } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";

export const Footer = () => (
  <div className="flex justify-between">
    <div className="flex gap-2 items-center">
      <span className="flex gap-1 text-sm items-center">
        <ShoppingBag className="h-4 w-4" />
        R$ 0,00
      </span>
      <span className="flex gap-1 text-sm items-center">
        <Receipt className="h-4 w-4" />
        R$ 28,89
      </span>
    </div>
    <ThemeToggle />
  </div>
);
