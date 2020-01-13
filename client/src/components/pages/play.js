import React, { useContext, useEffect, Fragment, useState } from "react";
import AuthContext from "../../context/auth/authContext";
import QuestionContext from "../../context/questions/questionContext";
import QuestionCard from "../play/QuestionCard";
import Grid from "../play/Grid";

const Play = ({
  setOnePoints,
  setTwoPoints,
  onePoints,
  twoPoints,
  ...props
}) => {
  let [questionDetail, setQuestionDetails] = useState(false);
  let [qSelected, setQSelected] = useState(null);

  const questionContext = useContext(QuestionContext);
  const { getQuestions } = questionContext;
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
          setQuestion={qSelected}
          {...props}
          setOnePoints={{ setOnePoints }}
          setTwoPoints={props.setTwoPoints}
          onePoints={onePoints}
          twoPoints={twoPoints}
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
