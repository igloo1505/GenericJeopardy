import React from "react";

const ScoreCard = ({ ...props }) => {
  return (
    <div>
      <h4>Team 1 : {props.pointsOne}</h4>
      <h4>Team 2 : {props.pointsTwo}</h4>
    </div>
  );
};

export default ScoreCard;
