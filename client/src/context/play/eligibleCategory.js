// let sortedArray = [];
// let eligible = [];
let DynamicArray = [];

export const d_list = questions => {
  if (questions !== null) {
    for (var i = 0; i < questions.length; i++) {
      var catOutput = questions[i].category;
      if (DynamicArray.indexOf(catOutput) === -1) {
        DynamicArray.push(catOutput);
      }
    }
  }
};
export default d_list;

//   if (questions !== null) {
//     sortedArray = questions.filter(q => q.category === DynamicArray[0]);
//     console.log(sortedArray);
//     var pointsArray = sortedArray.map(p => p.points);
//     console.log(pointsArray);
//     if (
//       pointsArray.includes(100) &&
//       pointsArray.includes(200) &&
//       pointsArray.includes(300) &&
//       pointsArray.includes(400) &&
//       pointsArray.includes(500)
//     ) {
//       console.log("passed!!");
//       eligible.push(sortedArray);
//       console.log(pointsArray);
//     }
//   }
// }
