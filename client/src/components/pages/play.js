import React, { useContext, useEffect, Fragment, useState } from "react";
import AuthContext from "../../context/auth/authContext";
// import PlayContext from "../../context/play/playContext";

// import CategoryPassed from "../../context/play/eligibleCategory";
import QuestionCard from "../play/QuestionCard";
import Grid from "../play/Grid";

const Play = ({ questions, ...props }) => {
  const [selected, setSelected] = useState([]);
  let [questionDetail, setQuestionDetails] = useState(false);
  let [qSelected, setQSelected] = useState(null);

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
          selected={selected}
          setQuestion={setQSelected}
          setSelected={setSelected}
          question={questions}
        />
      )}
    </Fragment>
  );
};

export default Play;
