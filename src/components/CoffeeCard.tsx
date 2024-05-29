import { FC } from "react";

import Star from "../assets/Star.svg";
import { Coffee } from "../types/Coffee";
import RatingStar from "../assets/Star_fill.svg";

const CoffeeCard: FC<Coffee> = ({
  name,
  image,
  available,
  price,
  popular,
  rating,
  votes,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <img src={image} alt={`Image of ${name}`} className="rounded-2xl" loading="lazy" />
        {popular && (
          <small className="absolute top-2 left-2 bg-[#F6C768] py-1 px-3 text-[10px] text-black font-bold rounded-xl">
            Popular
          </small>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">{name}</h2>

          <p className="bg-[#BEE3CC] text-black text-[12px] text-center font-semibold p-1 rounded-md">
            {price}
          </p>
        </div>

        <div className="flex flex-row items-center justify-between">
          {rating ? (
            <div className="flex flex-row items-center">
              <img src={RatingStar} alt="Filled Star for Rating" />
              <p className="text-[14px] font-semibold">
                {rating}{" "}
                <span className="text-[#6F757C] text-[14px]">
                  ({votes} votes)
                </span>
              </p>
            </div>
          ) : (
            <div className="flex flex-row items-center">
              <img src={Star} alt="Empty Star for No Rating" />
              <p className="text-[#6F757C] text-[14px] font-semibold">
                No ratings
              </p>
            </div>
          )}

          {!available && <span className="text-red-500">Sold Out</span>}
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
