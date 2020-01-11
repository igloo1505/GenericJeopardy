import React, { useContext } from "react";
import QuestionContext from "../../context/questions/questionContext";

let sortedArray = [];
let eligible = [];
let DynamicArray = [];

const satisfied = questions => {
  if (questions !== null) {
    for (var i = 0; i < questions.length; i++) {
      var catOutput = questions[i].category;
      if (DynamicArray.indexOf(catOutput) === -1) {
        DynamicArray.push(catOutput);
      }
    }
  }

  for (var index = 0; index < DynamicArray.length; index++) {
    console.log(DynamicArray.length);
  }
  if (questions !== null) {
    var analyze = 0;
    var sat = questions.includes(
      questions.points == 400
      //   el.category == DynamicArray[0] && el.points == 200,
      //   el.category == DynamicArray[0] && el.points == 300,
      //   el.category == DynamicArray[0] && el.points == 400,
      //   el.category == DynamicArray[0] && el.points == 500
    );
    console.log(questions);
  }

  for (var o = 0; o < DynamicArray; o++) {
    if (questions !== null) {
      sortedArray = questions.filter(q => q.category === DynamicArray[0]);
      console.log(sortedArray);
      var pointsArray = sortedArray.map(p => p.points);
      console.log(pointsArray);
      if (
        pointsArray.includes(100) &&
        pointsArray.includes(200) &&
        pointsArray.includes(300) &&
        pointsArray.includes(400) &&
        pointsArray.includes(500)
      ) {
        console.log("passed!!");
        eligible.push(sortedArray);
        console.log(pointsArray);
      }
    }
  }
};

export default satisfied;
