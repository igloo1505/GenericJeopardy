import React, { useContext, useEffect, Fragment } from "react";
import AuthContext from "../../context/auth/authContext";
import PlayContext from "../../context/play/playContext";
import QuestionContext from "../../context/questions/questionContext";

function Grid({ ...props }) {
  const playContext = useContext(PlayContext);
  const { selected } = playContext;
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

  const select = (points, cat, id) => {
    selected.push(id);
    console.log(selected);

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
            className={
              "card-container" +
              (selected.includes(1) ? " bg-light" : " bg-prime")
            }
            points="100"
            id="1"
            onClick={e => select(100, "cat1", 1)}
          >
            <h3 className="text-light">100</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(2) ? " bg-light" : " bg-prime")
            }
            points="200"
            id="2"
            onClick={() => select(100, "cat1", 2)}
          >
            <h3 className="text-light">200</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(3) ? " bg-light" : " bg-prime")
            }
            points="300"
            id="3"
            onClick={e => select(300, "cat1", 3)}
          >
            <h3 className="text-light">300</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(4) ? " bg-light" : " bg-prime")
            }
            points="400"
            id="4"
            onClick={e => select(400, "cat1", 4)}
          >
            <h3 className="text-light">400</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(5) ? " bg-light" : " bg-prime")
            }
            points="500"
            id="5"
            onClick={e => select(500, "cat1", 5)}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col2">
          <div className="category2">
            <h2>Category 2</h2>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(6) ? " bg-light" : " bg-prime")
            }
            points="100"
            id="6"
            onClick={e => select(100, "cat2", 6)}
          >
            <h3 className="text-light">100</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(7) ? " bg-light" : " bg-prime")
            }
            points="200"
            key="7"
            onClick={e => select(200, "cat2", 7)}
          >
            <h3 className="text-light">200</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(8) ? " bg-light" : " bg-prime")
            }
            points="300"
            id="8"
            onClick={e => select(300, "cat2", 8)}
          >
            <h3 className="text-light">300</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(9) ? " bg-light" : " bg-prime")
            }
            points="400"
            id="9"
            onClick={e => select(400, "cat2", 9)}
          >
            <h3 className="text-light">400</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(10) ? " bg-light" : " bg-prime")
            }
            points="500"
            id="10"
            onClick={e => select(500, "cat2", 10)}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col3">
          <div className="category3">
            <h2>Category 3</h2>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(11) ? " bg-light" : " bg-prime")
            }
            points="100"
            id="11"
            onClick={e => select(100, "cat3", 11)}
          >
            <h3 className="text-light">100</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(12) ? " bg-light" : " bg-prime")
            }
            points="200"
            id="12"
            onClick={e => select(200, "cat3", 12)}
          >
            <h3 className="text-light">200</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(13) ? " bg-light" : " bg-prime")
            }
            points="300"
            id="13"
            onClick={e => select(300, "cat3", 13)}
          >
            <h3 className="text-light">300</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(14) ? " bg-light" : " bg-prime")
            }
            points="400"
            id="14"
            onClick={e => select(400, "cat3", 14)}
          >
            <h3 className="text-light">400</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(15) ? " bg-light" : " bg-prime")
            }
            points="500"
            id="15"
            onClick={e => select(500, "cat3", 15)}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col4">
          <div className="category4">
            <h2>Category 4</h2>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(16) ? " bg-light" : " bg-prime")
            }
            points="100"
            id="16"
            onClick={e => select(100, "cat4", 16)}
          >
            <h3 className="text-light">100</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(17) ? " bg-light" : " bg-prime")
            }
            points="200"
            id="17"
            onClick={e => select(200, "cat4", 17)}
          >
            <h3 className="text-light">200</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(18) ? " bg-light" : " bg-prime")
            }
            points="300"
            id="18"
            onClick={e => select(300, "cat4", 18)}
          >
            <h3 className="text-light">300</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(19) ? " bg-light" : " bg-prime")
            }
            points="400"
            id="19"
            onClick={e => select(400, "cat4", 19)}
          >
            <h3 className="text-light">400</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(20) ? " bg-light" : " bg-prime")
            }
            points="500"
            id="20"
            onClick={e => select(500, "cat4", 20)}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col5">
          <div className="category5">
            <h2>Category 5</h2>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(21) ? " bg-light" : " bg-prime")
            }
            points="100"
            id="21"
            onClick={e => select(100, "cat5", 21)}
          >
            <h3 className="text-light">100</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(22) ? " bg-light" : " bg-prime")
            }
            points="200"
            id="22"
            onClick={e => select(200, "cat5", 22)}
          >
            <h3 className="text-light">200</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(23) ? " bg-light" : " bg-prime")
            }
            points="300"
            id="23"
            onClick={e => select(300, "cat5", 23)}
          >
            <h3 className="text-light">300</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(24) ? " bg-light" : " bg-prime")
            }
            points="400"
            id="24"
            onClick={e => select(400, "cat5", 24)}
          >
            <h3 className="text-light">400</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(25) ? " bg-light" : " bg-prime")
            }
            points="500"
            id="25"
            onClick={e => select(500, "cat5", 25)}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col6">
          <div className="category6">
            <h2>Category 6</h2>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(26) ? " bg-light" : " bg-prime")
            }
            points="100"
            id="26"
            onClick={e => select(100, "cat6", 26)}
          >
            <h3 className="text-light">100</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(27) ? " bg-light" : " bg-prime")
            }
            points="200"
            id="27"
            onClick={e => select(200, "cat6", 27)}
          >
            <h3 className="text-light">200</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(28) ? " bg-light" : " bg-prime")
            }
            points="300"
            id="28"
            onClick={e => select(300, "cat6", 28)}
          >
            <h3 className="text-light">300</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(29) ? " bg-light" : " bg-prime")
            }
            points="400"
            id="29"
            onClick={e => select(400, "cat6", 29)}
          >
            <h3 className="text-light">400</h3>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(30) ? " bg-light" : " bg-prime")
            }
            points="500"
            id="30"
            onClick={e => select(500, "cat6", 30)}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Grid;
