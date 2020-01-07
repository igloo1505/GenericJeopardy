import React from "react";

const About = () => {
  return (
    <div>
      <br />
      <h1>About</h1>
      <h2 style={aboutStyle}>Server based Jeopardy game.</h2>
      <p className="bg-dark p">Version 1.0.0</p>
      <br />
      <p style={aboutStyle}>
        Add questions to the database using the admin page. Include a point
        value and category, and the application will automatically sort them by
        category and randomize the output if more than 5 questions exist in that
        category.
      </p>
      <br />

      <p>
        Once all point values of 100 through 500 are met the category icon will
        turn green and the category will be added to the randomized list. If it
        is red, there is at least one missing point value. There is no reason to
        stop at 5 questions though. If more are added the computer will pick out
        5 randomly accord to their point value and insert them, so no game will
        repeat itself.
      </p>
    </div>
  );
};

export default About;

var aboutStyle = {
  textAlign: "left"
};
