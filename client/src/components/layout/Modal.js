import React, { Fragment, useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";

import PlayContext from "../../context/play/playContext";

const ModalTeam = () => {
  const playContext = useContext(PlayContext);
  const { setTeams } = playContext;
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
  const onSubmit = e => {
    let teamOne = document.getElementById("teamOne").value;
    let teamTwo = document.getElementById("teamTwo").value;
    setTeams(teamOne, teamTwo);
    hideModal();
  };
  return (
    <Fragment>
      <button onClick={showModal} className={"p-2 btn-prime btn team-btn"}>
        Set Team Names
      </button>
      <form onSubmit={onSubmit}>
        <Modal
          show={isOpen}
          onHide={hideModal}
          centered={true}
          animation={false}
          className="teamNames"
        >
          <Modal.Header>Input team names</Modal.Header>
          <Modal.Body>
            <input
              type="text"
              placeholder="Team 1"
              name="teamOne"
              id="teamOne"
            ></input>
            <input
              type="text"
              placeholder="Team 2"
              name="teamTwo"
              id="teamTwo"
            ></input>
          </Modal.Body>
          <Modal.Footer>
            <input
              className="btn btn-block btn-success"
              type="submit"
              onClick={onSubmit}
              onSubmit={onSubmit}
            ></input>
          </Modal.Footer>
        </Modal>
      </form>
    </Fragment>
  );
};

export default ModalTeam;
