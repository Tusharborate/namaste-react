const User = (props) => {
  return (
    <>
      <h2>Name: {props.name}</h2>
      <h3>Designation: {props.designation}</h3>
      <h4>Location: {props.location}</h4>
    </>
  );
};

export default User;
