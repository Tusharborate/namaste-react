import { CLOUD_URL } from "../utils/config";
import { Link } from "react-router-dom";

const RestoComponentLoop = (props) => {
  const { id, cloudinaryImageId, name, locality, cuisines, avgRating } =
    props.data;
  return (
    <div className="flex flex-col w-[250px] border-solid border-[1px] border-black mb-4 hover:bg-pink-50">
      <Link to={"/restaurants/" + id}>
        <img
          className="h-60 w-full"
          src={CLOUD_URL + cloudinaryImageId}
          alt="Pizza Hut"
        />
        <div className="p-2">
          <h3 className="font-bold pb-1">{name}</h3>
          <p className="resto-options">{cuisines.join(", ")}</p>
          <p className="resto-location">{locality}</p>
          <p className="resto-ratings">{avgRating}</p>
        </div>
      </Link>
    </div>
  );
};

export const featuredRestoComponent = (RestoComponentLoop) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute bg-orange-400 px-2 py-1 w-full text-center font-bold">
          Pure Veg
        </span>
        <RestoComponentLoop {...props} />
      </div>
    );
  };
};

export const areaRestoComponent = (RestoComponentLoop) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute bg-orange-400 px-2 py-1 w-full text-center font-bold">
          Shivajinagar Area
        </span>
        <RestoComponentLoop {...props} />
      </div>
    );
  };
};

export default RestoComponentLoop;
