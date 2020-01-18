import React, { useContext, useEffect, Fragment, useState } from "react";
import QuestionContext from "../../context/questions/questionContext";

import AuthContext from "../../context/auth/authContext";
import QuestionCard from "../play/QuestionCard";
import Grid from "../play/Grid";
import eligibleCategory from "../../context/play/eligibleCategory";

const Play = ({ ...props }) => {
  const questionContext = useContext(QuestionContext);
  const { questions } = questionContext;
  let [questionDetail, setQuestionDetails] = useState(false);
  let [qSelected, setQSelected] = useState(null);

  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  eligibleCategory(questions);

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
          // selected={selected}
          setQuestion={setQSelected}
          // setSelected={setSelected}
          question={questions}
        />
      )}
    </Fragment>
  );
};

export default Play;
