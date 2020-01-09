import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import PlayButton from "../play/PlayButton";

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <PlayButton />
    </div>
  );
};

export default Home;
