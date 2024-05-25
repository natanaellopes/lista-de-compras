import { Actions } from "./Actions";

export const Header = () => (
  <div className="flex justify-between items-center">
    <div>
      <h1 className="text-4xl font-bold">Lista de compras</h1>
      <p>Gerencie sua lista de compras de maneira fácil</p>
    </div>
    <Actions />
  </div>
);
