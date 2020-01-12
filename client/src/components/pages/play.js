import React, { useContext, useEffect, Fragment, useState } from "react";
import AuthContext from "../../context/auth/authContext";
import QuestionContext from "../../context/questions/questionContext";
import QuestionCard from "../play/QuestionCard";
import Grid from "../play/Grid";
import PlayContext from "../../context/play/playContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import satisfied from "../../context/play/eligibleCategory";

const Play = props => {
  let [questionDetail, setQuestionDetails] = useState(false);
  let [qSelected, setQSelected] = useState(null);

  const questionContext = useContext(QuestionContext);
  const { questions, getQuestions, loading } = questionContext;
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {questionDetail ? (
        <QuestionCard
          grid={() => setQuestionDetails(false)}
          setQuestion={props}
        />
      ) : (
        <Grid
          detail={() => setQuestionDetails(true)}
          setQuestion={setQSelected}
        />
      )}
    </Fragment>
  );
};

export default Play;
