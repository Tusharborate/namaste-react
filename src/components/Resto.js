const RestoComponent = (props) => {
  const { image, name, locality, cuisine, rating } = props.data;

  const cuis = [];
  cuisine.map((resto) => {
    cuis.push(resto.name);
  });
  // console.log(cuis);
  return (
    <div className="resto-card">
      <img className="resto-img" src={image.url} alt="Pizza Hut" />
      <div className="resto-card-content">
        <h3 className="resto-title">{name}</h3>
        <p className="resto-options">{cuis.join(", ")}</p>
        <p className="resto-location">{locality.name}</p>
        <p className="resto-ratings">{rating.rating_text}</p>
      </div>
    </div>
  );
};

export default RestoComponent;
