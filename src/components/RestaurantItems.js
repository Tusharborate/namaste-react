import React from "react";
import { CLOUD_URL } from "../utils/config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantItems = ({ data }) => {
  console.log(data);
  const { description, imageId } = data?.card?.info;
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

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
      <div className="w-2/12 relative">
        {imageId && <img src={CLOUD_URL + imageId} alt={name} />}
        <div className="absolute bottom-0 right-0">
          <button
            className="p-2 rounded-lg bg-black text-white shadow-lg"
            onClick={() => handleAddItem(data)}
          >
            Add +
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItems;
