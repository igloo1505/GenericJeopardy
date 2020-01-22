import _ from "lodash";

let FilteredArray = [];
const eligibleCategory = ({
  questions,
  setPassed,
  categoriesPassed,
  past,
  setRanList,
  setRandomOutput,
  abc
}) => {
  var grouped = _.groupBy(questions, "category");

  let GroupedArray = Object.values(grouped);

  for (var index = 0; index < GroupedArray.length; index++) {
    FilteredArray.push(_.uniqBy(GroupedArray[index], "points"));
  }
  for (var x = 0; x < FilteredArray.length; x++) {
    if (
      FilteredArray[x].length >= 5 &&
      categoriesPassed.includes(FilteredArray[x][0].category) === false
    ) {
      setPassed(FilteredArray[x][0].category);
    }
  }

  let randomList = [];

  if (categoriesPassed.length >= 6) {
    past();
    while (randomList.length < 6) {
      let ran = Math.floor(Math.random() * categoriesPassed.length);
      if (randomList.indexOf(categoriesPassed[ran]) === -1) {
        randomList.push(categoriesPassed[ran]);
      }
    }
    setRandomOutput(randomList);
  }
  return console.log(randomList);
};

export default eligibleCategory;
