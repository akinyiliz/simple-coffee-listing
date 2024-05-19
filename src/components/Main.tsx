import { useEffect, useState } from "react";

import Products from "./Products";
import { Coffee } from "../types/Coffee";
import Vector from "../assets/vector.svg";

function Main() {
  const [results, setResults] = useState<Coffee[]>([]);
  const [buttonClicked, setButtonClicked] = useState(true);

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
        );

        const data = await response.json();

        setResults(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCoffees();
  }, []);

  const availableResults = results.filter((result) => result.available);

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
              onClick={() => setButtonClicked((prev) => !prev)}
              type="button"
              className={`py-2 px-3 text-[14px] ${
                buttonClicked && "bg-[#6F757C] rounded-lg"
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setButtonClicked((prev) => !prev)}
              type="button"
              className={`py-2 px-3 text-[14px] ${
                !buttonClicked && "bg-[#6F757C] rounded-lg"
              }`}
            >
              Available Now
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-20 mb-12">
        {buttonClicked ? (
          <Products products={results} />
        ) : (
          <Products products={availableResults} />
        )}
      </div>
    </div>
  );
}

export default Main;
