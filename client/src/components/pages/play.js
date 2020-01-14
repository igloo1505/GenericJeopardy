import React, { useContext, useEffect, Fragment, useState } from "react";
import AuthContext from "../../context/auth/authContext";
// import QuestionContext from "../../context/questions/questionContext";
// import CategoryPassed from "../../context/play/eligibleCategory";
import QuestionCard from "../play/QuestionCard";
import Grid from "../play/Grid";

const Play = ({ questions, ...props }) => {
  // debugger;
  let [questionDetail, setQuestionDetails] = useState(false);
  let [qSelected, setQSelected] = useState(null);

  // const questionContext = useContext(QuestionContext);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

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
