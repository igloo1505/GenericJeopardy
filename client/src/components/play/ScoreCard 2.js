import React, { useContext } from "react";
import PlayContext from "../../context/play/playContext";

const ScoreCard = () => {
  const playContext = useContext(PlayContext);

  const { team1points, team2points, team1name, team2name } = playContext;

  return (
    <div>
      <h4>
        {team1name} : {team1points}
      </h4>
      <h4>
        {team2name} : {team2points}
      </h4>
    </div>
  );
};

export default ScoreCard;
