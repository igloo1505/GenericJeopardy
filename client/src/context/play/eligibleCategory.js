import { useContext } from "react";
import _ from "lodash";

let CategoryArray = [];
let FilteredArray = [];
const eligibleCategory = (questions, setPassed, categoriesPassed) => {
  var grouped = _.groupBy(questions, "category");

  let GroupedArray = Object.values(grouped);

  for (var index = 0; index < GroupedArray.length; index++) {
    FilteredArray.push(_.uniqBy(GroupedArray[index], "points"));
  }
  for (var x = 0; x < FilteredArray.length; x++) {
    debugger;
    if (
      FilteredArray[x].length >= 5 &&
      categoriesPassed.includes(FilteredArray[x][0].category) === false
    ) {
      setPassed(FilteredArray[x][0].category);
      // categoriesPassed.push(FilteredArray[x].category);
    } else {
      console.log("wtf");
    }
  }

  return console.log(categoriesPassed);
};

export default eligibleCategory;
