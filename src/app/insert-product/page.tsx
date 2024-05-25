import { ButtonSubmit } from "@/components/ButtonSubmit/ButtonSubmit";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { revalidateTag } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";
import { z } from "zod";

const insertProductSchema = z.object({
  name: z.string().min(1),
  price: z.coerce.number().min(1),
  quantity: z.coerce.number().min(1),
});

const InsertProductPage = () => {
  async function onSubmit(formData: FormData) {
    "use server";

    const name = formData.get("name");
    const price = formData.get("price");
    const quantity = formData.get("quantity");

    const payload = {
      name,
      price,
      quantity,
    };

    const validate = insertProductSchema.safeParse(payload);

    if (!validate.success) {
      return {
        error: "Invalidated",
      };
    }

    await fetch("http://localhost:3333/products", {
      method: "POST",
      body: JSON.stringify(validate.data),
    });

    revalidateTag("product-list");
    redirect("/");
  }

  return (
    <Card className="dark:bg-gray-900 bg-gray-100">
      <form action={onSubmit} className="flex flex-col gap-4">
        <CardHeader>
          <CardTitle>Adicionar produto</CardTitle>
          <CardDescription>
            Adicione uma produto a sua lista de compras
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Produto</Label>
            <Input type="text" name="name" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="quantity">Quantidade</Label>
            <Input type="text" name="quantity" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="price">Preço</Label>
            <Input type="text" name="price" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="secondary" asChild>
            <Link href="/">Voltar ao início</Link>
          </Button>
          <ButtonSubmit />
        </CardFooter>
      </form>
    </Card>
  );
};

export default InsertProductPage;
