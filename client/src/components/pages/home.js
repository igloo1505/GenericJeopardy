import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
// import quotes from "../../context/play/quotes";
import PlayButton from "../play/PlayButton";

const Home = ({ ...props }) => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <PlayButton onClick={() => props.setPlay(true)} />
    </div>
  );
};

export default Home;
