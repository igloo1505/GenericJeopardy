import React, { useContext, useEffect, Fragment } from "react";
import AuthContext from "../../context/auth/authContext";
import PlayContext from "../../context/play/playContext";
import QuestionContext from "../../context/questions/questionContext";

function Grid({ ...props }) {
  const playContext = useContext(PlayContext);
  const { selected, randomOutput } = playContext;
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

  const select = async (points, cat, id) => {
    selected.push(id);

    let newArr = questions.filter(
      q => q.category === cat && q.points === points
    );
    if (newArr.length > 1) {
      let randomOutput = Math.floor(Math.random() * newArr.length);
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
      <h2 className="mobileWarning">
        This game really isn't ideal for mobile devices... but do your thing in
        other sections.
      </h2>
      <div className="mainGrid">
        <div className="col1" id="Sample 1">
          <div className="category1">
            <h2>{randomOutput[0]}</h2>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(1) ? " bg-light" : " bg-prime")
            }
            points="100"
            id="1"
            onClick={e => select(100, randomOutput[0], 1)}
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
            onClick={() => select(100, randomOutput[0], 2)}
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
            onClick={e => select(300, randomOutput[0], 3)}
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
            onClick={e => select(400, randomOutput[0], 4)}
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
            onClick={e => select(500, randomOutput[0], 5)}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col2">
          <div className="category2">
            <h2>{randomOutput[1]}</h2>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(6) ? " bg-light" : " bg-prime")
            }
            points="100"
            id="6"
            onClick={e => select(100, randomOutput[1], 6)}
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
            onClick={e => select(200, randomOutput[1], 7)}
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
            onClick={e => select(300, randomOutput[1], 8)}
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
            onClick={e => select(400, randomOutput[1], 9)}
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
            onClick={e => select(500, randomOutput[1], 10)}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col3">
          <div className="category3">
            <h2>{randomOutput[2]}</h2>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(11) ? " bg-light" : " bg-prime")
            }
            points="100"
            id="11"
            onClick={e => select(100, randomOutput[2], 11)}
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
            onClick={e => select(200, randomOutput[2], 12)}
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
            onClick={e => select(300, randomOutput[2], 13)}
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
            onClick={e => select(400, randomOutput[2], 14)}
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
            onClick={e => select(500, randomOutput[2], 15)}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col4">
          <div className="category4">
            <h2>{randomOutput[3]}</h2>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(16) ? " bg-light" : " bg-prime")
            }
            points="100"
            id="16"
            onClick={e => select(100, randomOutput[3], 16)}
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
            onClick={e => select(200, randomOutput[3], 17)}
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
            onClick={e => select(300, randomOutput[3], 18)}
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
            onClick={e => select(400, randomOutput[3], 19)}
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
            onClick={e => select(500, randomOutput[3], 20)}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col5">
          <div className="category5">
            <h2>{randomOutput[4]}</h2>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(21) ? " bg-light" : " bg-prime")
            }
            points="100"
            id="21"
            onClick={e => select(100, randomOutput[4], 21)}
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
            onClick={e => select(200, randomOutput[4], 22)}
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
            onClick={e => select(300, randomOutput[4], 23)}
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
            onClick={e => select(400, randomOutput[4], 24)}
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
            onClick={e => select(500, randomOutput[4], 25)}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col6">
          <div className="category6">
            <h2>{randomOutput[5]}</h2>
          </div>
          <div
            className={
              "card-container" +
              (selected.includes(26) ? " bg-light" : " bg-prime")
            }
            points="100"
            id="26"
            onClick={e => select(100, randomOutput[5], 26)}
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
            onClick={e => select(200, randomOutput[5], 27)}
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
            onClick={e => select(300, randomOutput[5], 28)}
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
            onClick={e => select(400, randomOutput[5], 29)}
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
            onClick={e => select(500, randomOutput[5], 30)}
          >
            <h3 className="text-light">500</h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Grid;
