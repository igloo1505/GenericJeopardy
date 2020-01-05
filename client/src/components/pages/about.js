import React from "react";

const About = () => {
  return (
    <div>
      <br />
      <h1>About</h1>
      <h2 style={aboutStyle}>Server based Jeopardy game.</h2>
      <p className="bg-dark p">Version 1.0.0</p>
      <br />
      <h3 style={aboutStyle}>
        Add questions to the database using the admin page. Include a point
        value and category, and the application will automatically sort them by
        category and randomize the output if more than 5 questions exist in that
        category.
      </h3>
    </div>
  );
};

export default About;

var aboutStyle = {
  textAlign: "left"
};
