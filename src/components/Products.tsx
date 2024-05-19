import { FC } from "react";

import CoffeeCard from "./CoffeeCard";
import { Coffee } from "../types/Coffee";

interface ProductsProps {
  products: Coffee[];
}

const Products: FC<ProductsProps> = ({ products }) => {
  return (
    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10">
      {products.map((product) => (
        <CoffeeCard
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          rating={product.rating}
          available={product.available}
          popular={product.popular}
          price={product.price}
          votes={product.votes}
        />
      ))}
    </div>
  );
};

export default Products;
