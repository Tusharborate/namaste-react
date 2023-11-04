import React from "react";
import User from "./User.js";
import UserClass from "./UserClass.js";

const About = () => {
  return (
    <div>
      <h1>This is function component</h1>
      <User name="Tushar" designation="Developer" location="Natepute" />

      <h1>This is class component</h1>
      <UserClass name="Tushar" designation="Developer" location="Natepute" />
    </div>
  );
};

export default About;
