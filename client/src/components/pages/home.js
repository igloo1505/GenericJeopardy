import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import QuestionContext from "../../context/questions/questionContext";
import PlayButton from "../play/PlayButton";

const Home = ({ ...props }) => {
  const authContext = useContext(AuthContext);
  const questionContext = useContext(QuestionContext);
  const { getQuestions, questions } = questionContext;
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div>
      <PlayButton onClick={() => props.setPlay(true)} questions={questions} />
    </div>
  );
};

export default Home;
