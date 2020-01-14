import React, { useContext } from "react";
import PlayContext from "../../context/play/playContext";

const ScoreCard = () => {
  const playContext = useContext(PlayContext);

  const { team1points, team2points } = playContext;

  return (
    <div>
      <h4>Team 1 : {team1points}</h4>
      <h4>Team 2 : {team2points}</h4>
    </div>
  );
};

export default ScoreCard;
