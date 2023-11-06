import React from "react";
import User from "./User.js";
import UserClass from "./UserClass.js";

/*
const About = () => {
  return (
    <div>
      <h1>This is function component</h1>
      <User name="Tushar" designation="Developer" location="Natepute" />
      <hr></hr>
      <h1>This is class component</h1>
      <UserClass name="Tushar" designation="Developer" location="Natepute" />
    </div>
  );
};*/

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Component Constructor Method Called");
  }
  componentDidMount() {
    console.log("Parent Component componentDidMount Method Called");
  }
  render() {
    console.log("Parent Component Render Method Called");
    return (
      <>
        <UserClass name="Tushar" designation="Developer" location="Natepute" />
        <UserClass name="Shambho" designation="Cricketer" location="Natepute" />
        <UserClass
          name="Kiran"
          designation="Creative Lead"
          location="Natepute"
        />
      </>
    );
  }
}

export default About;
