import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";

const Play = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>Play layout coming soon.</h1>
    </div>
  );
};

export default Play;
