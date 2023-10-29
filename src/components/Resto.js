import { CLOUD_URL } from "../utils/config";

const RestoComponent = (props) => {
  const { cloudinaryImageId, name, locality, cuisines, avgRating } = props.data;

  /* const cuis = [];
  cuisine.map((resto) => {
    cuis.push(resto.name);
  }); */

  // console.log(cuis);
  return (
    <div className="resto-card">
      <img
        className="resto-img"
        src={CLOUD_URL + cloudinaryImageId}
        alt="Pizza Hut"
      />
      <div className="resto-card-content">
        <h3 className="resto-title">{name}</h3>
        <p className="resto-options">{cuisines.join(", ")}</p>
        <p className="resto-location">{locality.name}</p>
        <p className="resto-ratings">{avgRating}</p>
      </div>
    </div>
  );
};

export default RestoComponent;
