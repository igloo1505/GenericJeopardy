import React, { useContext, useEffect, Fragment, useState } from "react";
import AuthContext from "../../context/auth/authContext";
import QuestionContext from "../../context/questions/questionContext";

let selected = [];
console.log(selected);
console.log(selected.indexOf("16") == -1);

let classOut =
  selected.indexOf("16") !== -1
    ? "card-container-selected bg-light"
    : "card-container bg-primary";
function Grid(props) {
  const questionContext = useContext(QuestionContext);
  const { questions, getQuestions } = questionContext;
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line
  }, []);

  const change = id => {
    debugger;
    var x = document.getElementById(id);
    selected.push(id);
    console.log(selected);
  };

  const select = (points, cat, id) => {
    let newArr = questions.filter(
      q => q.category === "Sample 1" && q.points === points
    );
    change(id);
    if (newArr.length > 1) {
      let randomOutput = Math.floor(Math.random() * newArr.length);
      console.log(newArr[randomOutput]);
      let out = newArr[randomOutput];
      props.setQuestion({ out });
      props.detail();
      return out;
    } else {
      let out = newArr;
      props.setQuestion({ out });
      props.detail();
      console.log(points, cat);
    }
  };

  return (
    <Fragment>
      <div className="mainGrid">
        <div className="col1" id="Sample 1">
          <div className="category1">
            <h2>Category 1</h2>
          </div>
          <div
            className={classOut}
            points="100"
            id="1"
            onClick={e => select(100, "cat1", e.target.id)}
          >
            <h3 className="text-light">100</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="200"
            id="2"
            onClick={e => select(200, "cat1", e.target.id)}
          >
            <h3 className="text-light">200</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="300"
            id="3"
            onClick={e => select(300, "cat1", e.target.id)}
          >
            <h3 className="text-light">300</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="400"
            id="4"
            onClick={e => select(400, "cat1", e.target.id)}
          >
            <h3 className="text-light">400</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="500"
            id="5"
            onClick={e => select(500, "cat1", e.target.id)}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col2">
          <div className="category2">
            <h2>Category 2</h2>
          </div>
          <div
            className="square card-container bg-primary"
            points="100"
            id="6"
            onClick={e => select(100, "cat2", e.target.id)}
          >
            <h3 className="text-light">100</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="200"
            key="7"
            onClick={e => select(200, "cat2", e.target.id)}
          >
            <h3 className="text-light">200</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="300"
            id="8"
            onClick={e => select(300, "cat2", e.target.id)}
          >
            <h3 className="text-light">300</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="400"
            id="9"
            onClick={e => select(400, "cat2", e.target.id)}
          >
            <h3 className="text-light">400</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="500"
            id="10"
            onClick={e => select(500, "cat2", e.target.id)}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col3">
          <div className="category3">
            <h2>Category 3</h2>
          </div>
          <div
            className="square card-container bg-primary"
            points="100"
            id="11"
            onClick={e => select(100, "cat3", e.target.id)}
          >
            <h3 className="text-light">100</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="200"
            id="12"
            onClick={e => select(200, "cat3", e.target.id)}
          >
            <h3 className="text-light">200</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="300"
            id="13"
            onClick={e => select(300, "cat3", e.target.id)}
          >
            <h3 className="text-light">300</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="400"
            id="14"
            onClick={e => select(400, "cat3", e.target.id)}
          >
            <h3 className="text-light">400</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="500"
            id="15"
            onClick={e => select(500, "cat3", e.target.id)}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col4">
          <div className="category4">
            <h2>Category 4</h2>
          </div>
          <div
            className="square card-container bg-primary"
            points="100"
            id="16"
            onClick={e => select(100, "cat4", e.target.id)}
          >
            <h3 className="text-light">100</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="200"
            id="17"
            onClick={e => select(200, "cat4", e.target.id)}
          >
            <h3 className="text-light">200</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="300"
            id="18"
            onClick={e => select(300, "cat4", e.target.id)}
          >
            <h3 className="text-light">300</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="400"
            id="19"
            onClick={e => select(400, "cat4", e.target.id)}
          >
            <h3 className="text-light">400</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="500"
            id="20"
            onClick={e => select(500, "cat4", e.target.id)}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col5">
          <div className="category5">
            <h2>Category 5</h2>
          </div>
          <div
            className="square card-container bg-primary"
            points="100"
            id="21"
            onClick={e => select(100, "cat5", e.target.id)}
          >
            <h3 className="text-light">100</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="200"
            id="22"
            onClick={e => select(200, "cat5", e.target.id)}
          >
            <h3 className="text-light">200</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="300"
            id="23"
            onClick={e => select(300, "cat5", e.target.id)}
          >
            <h3 className="text-light">300</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="400"
            id="24"
            onClick={e => select(400, "cat5", e.target.id)}
          >
            <h3 className="text-light">400</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="500"
            id="25"
            onClick={e => select(500, "cat5", e.target.id)}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col6">
          <div className="category6">
            <h2>Category 6</h2>
          </div>
          <div
            className="square card-container bg-primary"
            points="100"
            id="26"
            onClick={e => select(100, "cat6", e.target.id)}
          >
            <h3 className="text-light">100</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="200"
            id="27"
            onClick={e => select(200, "cat6", e.target.id)}
          >
            <h3 className="text-light">200</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="300"
            id="28"
            onClick={e => select(300, "cat6", e.target.id)}
          >
            <h3 className="text-light">300</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="400"
            id="29"
            onClick={e => select(400, "cat6", e.target.id)}
          >
            <h3 className="text-light">400</h3>
          </div>
          <div
            className="square card-container bg-primary"
            points="500"
            id="30"
            onClick={e => select(500, "cat6", e.target.id)}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Grid;
