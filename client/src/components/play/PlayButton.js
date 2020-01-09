import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import QuestionContext from "../../context/questions/questionContext";
import quotes from "../../context/play/quotes";

const PlayButton = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated } = authContext;
  const guest = (
    <Fragment>
      <h1 className="t">You must be logged in to play.</h1>
    </Fragment>
  );

  let ran = Math.random();
  let ranIndex = Math.floor(ran * quotes.length);
  let quote = quotes[ranIndex];

  const authed = (
    <Fragment>
      <ul>
        <li>
          <Link className="btn btn-lg btn-primary" to="/play">
            <h1 className="play-text">Play</h1>
            <br />
            <h3>{quote.text}</h3>
            <h5 className="quote">
              <em>{quote.author}</em>
            </h5>
          </Link>
        </li>
      </ul>
    </Fragment>
  );

  return <div>{isAuthenticated ? authed : guest}</div>;
};

export default PlayButton;
