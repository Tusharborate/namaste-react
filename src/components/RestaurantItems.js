import React from "react";
import { CLOUD_URL } from "../utils/config";

const RestaurantItems = ({ data }) => {
  const { name, description, imageId } = data?.card?.info;
  return (
    <div className="flex items-center justify-between py-3 border-b-[1px]">
      <div className="w-10/12">
        <span className="font-semibold">{name}</span>
        <p>{description}</p>
        <p>
          Rs. {data.card.info.price / 100 || data.card.info.defaultPrice / 100}
          /-
        </p>
      </div>
      <div className="w-2/12">
        {imageId && <img src={CLOUD_URL + imageId} alt={name} />}
      </div>
    </div>
  );
};

export default RestaurantItems;
