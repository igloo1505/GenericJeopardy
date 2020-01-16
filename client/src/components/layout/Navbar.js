import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ScoreCard from "../play/ScoreCard";
import QuestionContext from "../../context/questions/questionContext";
import "../../App.css";

const Navbar = ({ title, icon, ...props }) => {
  const authContext = useContext(AuthContext);
  const questionContext = useContext(QuestionContext);
  const { clearQuestion } = questionContext;
  const { isAuthenticated, logoutUser } = authContext;

  const onLogout = () => {
    logoutUser();
    clearQuestion();
  };

  const authed = (
    <Fragment>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
      <li>
        <a onClick={onLogout} href="#!">
          Logout
        </a>
      </li>
    </Fragment>
  );

  const guest = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-prime">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      {isAuthenticated ? <ScoreCard /> : ""}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        {isAuthenticated ? authed : guest}
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Dewey Jeopardy"
};

export default Navbar;
