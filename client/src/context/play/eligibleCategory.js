import React from "react";

let sortedArray = [];
let eligible = [];
let DynamicArray = [];

const satisfied = (questions, catOutput) => {
  if (questions !== null) {
    for (var i = 0; i < questions.length; i++) {
      var catOutput = questions[i].category;
      if (DynamicArray.indexOf(catOutput) === -1) {
        DynamicArray.push(catOutput);
      }
    }
  }
  for (var index = 0; index < DynamicArray.length; index++) {
    console.log(DynamicArray);
  }

  for (var o = 0; o < DynamicArray; o++) {
    if (questions !== null) {
      sortedArray = questions.filter(q => q.category === DynamicArray.value);
      //   console.log(sortedArray);
      var pointsArray = sortedArray.map(p => p.points);
      //   console.log(pointsArray);
      if (
        pointsArray.includes(100) &&
        pointsArray.includes(200) &&
        pointsArray.includes(300) &&
        pointsArray.includes(400) &&
        pointsArray.includes(500)
      ) {
        console.log("passed mofo");
        eligible.push(DynamicArray.value);
        console.log(eligible);
      }
    }
  }
};

export default satisfied;
