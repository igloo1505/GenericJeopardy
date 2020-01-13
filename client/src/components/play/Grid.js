import React, { useContext, useEffect, Fragment } from "react";
import AuthContext from "../../context/auth/authContext";

import QuestionContext from "../../context/questions/questionContext";

import { d_list } from "../../context/play/eligibleCategory";

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
  d_list(questions);

  const select = (points, cat) => {
    let newArr = questions.filter(
      q => q.category === "Sample 1" && q.points === points
    );

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
            className="card-container bg-primary"
            points={100}
            onClick={() => select(100, "cat1")}
          >
            <h3 className="text-light">100</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="200"
            onClick={() => select(200, "cat1")}
          >
            <h3 className="text-light">200</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="300"
            onClick={() => select(300, "cat1")}
          >
            <h3 className="text-light">300</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="400"
            onClick={() => select(400, "cat1")}
          >
            <h3 className="text-light">400</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="500"
            onClick={() => select(500, "cat1")}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col2">
          <div className="category2">
            <h2>Category 2</h2>
          </div>
          <div
            className="card-container bg-primary"
            points="100"
            onClick={() => select(100, "cat2")}
          >
            <h3 className="text-light">100</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="200"
            onClick={() => select(200, "cat2")}
          >
            <h3 className="text-light">200</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="300"
            onClick={() => select(300, "cat2")}
          >
            <h3 className="text-light">300</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="400"
            onClick={() => select(400, "cat2")}
          >
            <h3 className="text-light">400</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="500"
            onClick={() => select(500, "cat2")}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col3">
          <div className="category3">
            <h2>Category 3</h2>
          </div>
          <div
            className="card-container bg-primary"
            points="100"
            onClick={() => select(100, "cat3")}
          >
            <h3 className="text-light">100</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="200"
            onClick={() => select(200, "cat3")}
          >
            <h3 className="text-light">200</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="300"
            onClick={() => select(300, "cat3")}
          >
            <h3 className="text-light">300</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="400"
            onClick={() => select(400, "cat3")}
          >
            <h3 className="text-light">400</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="500"
            onClick={() => select(500, "cat3")}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col4">
          <div className="category4">
            <h2>Category 4</h2>
          </div>
          <div
            className="card-container bg-primary"
            points="100"
            onClick={() => select(100, "cat4")}
          >
            <h3 className="text-light">100</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="200"
            onClick={() => select(200, "cat4")}
          >
            <h3 className="text-light">200</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="300"
            onClick={() => select(300, "cat4")}
          >
            <h3 className="text-light">300</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="400"
            onClick={() => select(400, "cat4")}
          >
            <h3 className="text-light">400</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="500"
            onClick={() => select(500, "cat4")}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col5">
          <div className="category5">
            <h2>Category 5</h2>
          </div>
          <div
            className="card-container bg-primary"
            points="100"
            onClick={() => select(100, "cat5")}
          >
            <h3 className="text-light">100</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="200"
            onClick={() => select(200, "cat5")}
          >
            <h3 className="text-light">200</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="300"
            onClick={() => select(300, "cat5")}
          >
            <h3 className="text-light">300</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="400"
            onClick={() => select(400, "cat5")}
          >
            <h3 className="text-light">400</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="500"
            onClick={() => select(500, "cat5")}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col6">
          <div className="category6">
            <h2>Category 6</h2>
          </div>
          <div
            className="card-container bg-primary"
            points="100"
            onClick={() => select(100, "cat6")}
          >
            <h3 className="text-light">100</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="200"
            onClick={() => select(200, "cat6")}
          >
            <h3 className="text-light">200</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="300"
            onClick={() => select(300, "cat6")}
          >
            <h3 className="text-light">300</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="400"
            onClick={() => select(400, "cat6")}
          >
            <h3 className="text-light">400</h3>
          </div>
          <div
            className="card-container bg-primary"
            points="500"
            onClick={() => select(500, "cat6")}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Grid;
