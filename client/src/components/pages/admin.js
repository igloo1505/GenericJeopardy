import React, { useContext, useEffect } from "react";
import Questions from "../questions/Questions";
import QuestionForm from "../questions/QuestionForm";
import QuestionFilter from "../questions/QuestionFilter";
import AuthContext from "../../context/auth/authContext";

const Admin = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="grid-2">
      <div>
        <QuestionForm />
      </div>
      <div>
        <QuestionFilter />
        <Questions />
      </div>
    </div>
  );
};

export default Admin;
