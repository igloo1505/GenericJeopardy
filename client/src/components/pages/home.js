import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import QuestionContext from "../../context/questions/questionContext";
// import Modal from "react-bootstrap/Modal";
import ModalTeam from "../layout/Modal";
import PlayButton from "../play/PlayButton";
import PlayContext from "../../context/play/playContext";

const Home = ({ ...props }) => {
  const playContext = useContext(PlayContext);
  const { resetGame } = playContext;
  const authContext = useContext(AuthContext);
  const questionContext = useContext(QuestionContext);
  const { getQuestions, questions } = questionContext;
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <ModalTeam />
      <button className="reset-btn btn btn-danger" onClick={() => resetGame()}>
        Reset
      </button>
      <PlayButton onClick={() => props.setPlay(true)} questions={questions} />
    </div>
  );
};

export default Home;
