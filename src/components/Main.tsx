import { useEffect, useState } from "react";

import Products from "./Products";
import { Coffee } from "../types/Coffee";
import Vector from "../assets/vector.svg";

function Main() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [showAllProducts, setShowAllProducts] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        setCoffees(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    };

    fetchCoffees();
  }, []);

  const toggleProducts = () => {
    setShowAllProducts((prev) => !prev);
  };

  const filteredCoffees = showAllProducts
    ? coffees
    : coffees.filter((coffee) => coffee.available);

  return (
    <div className="bg-[#1B1D1F] flex flex-col items-center gap-10 rounded-xl">
      <div className="relative flex flex-col items-center p-5">
        <img
          src={Vector}
          alt="Coffee Vector"
          className="ml-auto overflow-hidden"
        />

        <div className="absolute top-16 bottom-0 flex flex-col items-center gap-3">
          <h1 className="text-[32px] font-bold">Our Collection</h1>
          <p className="w-full text-center text-[#6F757C] font-semibold md:w-[600px]">
            Introducing our Coffee Collection, a selection of unique coffees-
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <div className="flex items-center gap-5 font-semibold">
            <button
              onClick={toggleProducts}
              type="button"
              className={`py-2 px-3 text-[14px] ${
                showAllProducts ? "bg-[#6F757C]" : ""
              } rounded-lg`}
            >
              All Products
            </button>
            <button
              onClick={toggleProducts}
              type="button"
              className={`py-2 px-3 text-[14px] ${
                !showAllProducts ? "bg-[#6F757C]" : ""
              } rounded-lg`}
            >
              Available Now
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-20 mb-12">
        {error && (
          <p className="text-[#6F757C] font-semibold">
            Sorry😞. No Coffees found, come back later.
          </p>
        )}

        <Products products={filteredCoffees} />
      </div>
    </div>
  );
}

export default Main;
