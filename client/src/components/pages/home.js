import React, { useContext, useEffect, Fragment, useState } from "react";
import AuthContext from "../../context/auth/authContext";
import QuestionContext from "../../context/questions/questionContext";
import { Link } from "react-router-dom";
import ModalTeam from "../layout/Modal";
import PlayButton from "../play/PlayButton";
import PlayContext from "../../context/play/playContext";
import eligibleCategory from "../../context/play/eligibleCategory";

const Home = ({ setPlay }) => {
  const playContext = useContext(PlayContext);
  const {
    resetGame,
    setPassed,
    categoriesPassed,
    setRandomOutput
  } = playContext;

  const authContext = useContext(AuthContext);
  const questionContext = useContext(QuestionContext);
  const { getQuestions, questions } = questionContext;
  const [enough, setEnough] = useState(false);
  const [ranList, setRanList] = useState([]);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line
  }, []);
  let hStyle = {
    width: "80%",
    textAlign: "center",
    margin: "auto",
    paddingTop: "15%"
  };
  let lStyle = {
    textAlign: "center",
    margin: "auto",
    width: "50%",
    borderRadius: "8px",
    backgroundColor: "#f4f4f4",
    marginTop: "20px",
    padding: "20px",
    border: "1px solid grey",
    display: "block"
  };

  if (enough === false) {
    const past = () => {
      setEnough(true);
    };
    eligibleCategory(
      questions,
      setPassed,
      categoriesPassed,
      past,
      setRanList,
      setRandomOutput
    );
  }

  return (
    <div>
      {enough ? <ModalTeam /> : " "}

      <button className="reset-btn btn btn-danger" onClick={() => resetGame()}>
        Reset
      </button>
      {enough ? (
        <PlayButton
          onClick={() => setPlay(true)}
          questions={questions}
          randomList={ranList}
        />
      ) : (
        <Fragment>
          <h1 style={hStyle}>
            Oh no. Please add more questions. You need 6 categories completed
            and now you only have {categoriesPassed.length}
          </h1>
          <Link to="/admin">
            <h1 style={lStyle}>Click here to add more.</h1>
          </Link>
        </Fragment>
      )}
    </div>
  );
};

export default Home;
