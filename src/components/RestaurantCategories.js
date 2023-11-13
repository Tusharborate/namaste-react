import { useState } from "react";
import RestaurantItems from "./RestaurantItems";

const RestaurantCategories = ({ data, showItems, setShowIndexChild }) => {
  const toggleCategoryData = () => {
    setShowIndexChild();
  };

  return (
    <div className="mb-3 border">
      <h3
        className="flex justify-between font-bold cursor-pointer p-3"
        onClick={toggleCategoryData}
      >
        {data.card.card.title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </h3>

      {showItems && (
        <div className="p-3">
          {data.card.card.itemCards.map((item) => {
            return <RestaurantItems key={item.card.info.name} data={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategories;
