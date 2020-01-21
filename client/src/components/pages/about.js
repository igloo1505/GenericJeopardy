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
        Add questions to the database using the admin page. These questions in
        Sample categories are just there to show how things will work when it's
        completed, delete them if you prefer and add as many as you want.
        Include a point value and category, and the application will
        automatically sort them by category and randomize the output if more
        than 5 questions exist in that category.
      </p>
      <br />

      <p>
        Once all point values of 100 through 500 are met the category icon will
        be added to the list of completed categories below the admin form and
        than 6 categories will be randomly picked and added to the game. If more
        than 5 questions per category are added, the computer will pick out 5
        randomly according to their point value and insert them, so with enough
        questions, no game will repeat itself exactly.
      </p>
      <div className="container-about">
        <h2>Notable stuff:</h2>
        <ol className="card-about bg-light">
          <li>
            Since the database hosting service I use is used only for production
            in most cases, it will "sleep" the same way a computer would if it
            has not been used for a while. This may cause the initial load to
            take a few extra seconds, but after that it will function like any
            other website or database.
          </li>
          <li>
            When opening a question to display it as "selected", the answer
            won't be shown immediately. To show the answer, press the spacebar
            and than either award or subtract points for the appropriate team.
          </li>

          <li>
            All questions are stored in a database. The authentication is only
            so a bunch of people not from `your` facility use this. The master
            password is the same for everyone, and is only required on initially
            signing up.
          </li>
          <li>
            All users once signed up share the same database, so if one employee
            enters or edits a certain question, category, answer, or point value
            it will be available for everyone else to use.
          </li>
          <li>
            You don't have to use your actual email. The validation only checks
            if it is formated like an email, and that it hasn't already been
            used. There is no verification email that gets sent.
          </li>
        </ol>
      </div>
      <footer className="footer">
        <span>
          IglooDevelopment <span className="logo">&#x2603;</span>
        </span>
      </footer>
    </div>
  );
};

export default About;

var aboutStyle = {
  textAlign: "left"
};
