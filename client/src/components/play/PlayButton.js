import React, { Fragment, useContext } from "react";

import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const PlayButton = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated } = authContext;
  const guest = (
    <Fragment>
      <h1 className="t">You must be logged in to play.</h1>
    </Fragment>
  );

  const authed = (
    <Fragment>
      <ul>
        <li>
          <Link className="btn btn-lg btn-primary" to="/play">
            <h1 className="play-text">Play</h1>
          </Link>
        </li>
      </ul>
    </Fragment>
  );

  return <div>{isAuthenticated ? authed : guest}</div>;
};

export default PlayButton;
