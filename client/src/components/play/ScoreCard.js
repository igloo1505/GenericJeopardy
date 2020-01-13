import React, { useState } from "react";

const ScoreCard = ({ ...props }) => {
  let [onePoints, setOnePoints] = useState(0);
  let [twoPoints, setTwoPoints] = useState(0);
  return (
    <div>
      <h4>Team 1 : {onePoints}</h4>
      <h4>Team 2 : {twoPoints}</h4>
    </div>
  );
};

export default ScoreCard;
