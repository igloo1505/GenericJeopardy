import React from "react";
import _ from "lodash";

let CategoryArray = [];
let FilteredArray = [];
const eligibleCategory = questions => {
  var grouped = _.groupBy(questions, "category");

  let GroupedArray = Object.values(grouped);
  console.log(GroupedArray);

  for (var index = 0; index < GroupedArray.length; index++) {
    FilteredArray.push(_.uniqBy(GroupedArray[index], "points"));
  }

  return console.log(FilteredArray);
};

export default eligibleCategory;
