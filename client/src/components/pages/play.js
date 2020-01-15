import React, { useContext, useEffect, Fragment, useState } from "react";
import AuthContext from "../../context/auth/authContext";
import PlayContext from "../../context/play/playContext";

// import CategoryPassed from "../../context/play/eligibleCategory";
import QuestionCard from "../play/QuestionCard";
import Grid from "../play/Grid";

const Play = ({ questions, ...props }) => {
  const playContext = useContext(PlayContext);
  const { team1points } = playContext;
  let [questionDetail, setQuestionDetails] = useState(false);
  let [qSelected, setQSelected] = useState(null);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  });
  useEffect(() => {
    localStorage.setItem("pointsOne", team1points);
  }, [team1points]);

  // CategoryPassed(questions);

  return (
    <Fragment>
      {questionDetail ? (
        <QuestionCard
          grid={() => setQuestionDetails(false)}
          setQuestion={qSelected}
          questions={questions}
          {...props}
        />
      ) : (
        <Grid
          detail={() => setQuestionDetails(true)}
          setQuestion={setQSelected}
          question={questions}
        />
      )}
    </Fragment>
  );
};

export default Play;
