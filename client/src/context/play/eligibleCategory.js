import React from "react";
import _ from "lodash";

let CategoryArray = [];
let FilteredArray = [];
const eligibleCategory = questions => {
  var grouped = _.groupBy(questions, "category");

  let GroupedArray = Object.values(grouped);
  // console.log(GroupedArray);

  for (var index = 0; index < GroupedArray.length; index++) {
    FilteredArray.push(_.uniqBy(GroupedArray[index], "points"));
  }
  for (var x = 0; x < FilteredArray.length; x++) {
    if (FilteredArray[x].length >= 5) {
      CategoryArray.push(FilteredArray[x][0].category);
      // console.log(FilteredArray[x][0].category);
    }
  }

  return console.log(CategoryArray);
};

export default eligibleCategory;
