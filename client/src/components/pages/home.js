import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import quotes from "../../context/play/quotes";
import PlayButton from "../play/PlayButton";

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  let ran = Math.random();
  let ranIndex = Math.floor(ran * quotes.length);
  let quote = quotes[ranIndex];

  return (
    <div>
      <PlayButton />
    </div>
  );
};

export default Home;
