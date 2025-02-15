// arrays.js

document.addEventListener("DOMContentLoaded", function() {
  // Activity 1 - Map
  const steps = ["one", "two", "three"];
  
  const listTemplate = (step) => {
    return `<li>${step}</li>`;
  };
  
  const stepsHtml = steps.map(listTemplate);
  document.querySelector("#myList").innerHTML = stepsHtml.join('');

  // Activity 2 - Map
  const grades = ["A", "B", "A"];
  
  function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
      points = 4;
    } else if (grade === "B") {
      points = 3;
    }
    return points;
  }
  
  const gpaPoints = grades.map(convertGradeToPoints);
  console.log(gpaPoints); // should output: [4, 3, 4]

  // Activity 3 - Reduce
  const pointsTotal = gpaPoints.reduce((total, item) => total + item, 0);
  console.log(pointsTotal); // should output: 11
  
  const gpa = pointsTotal / gpaPoints.length;
  console.log(gpa); // should output: 3.6666666666666665
  
  // Activity 4 - Filter
  const words = ["watermelon", "peach", "apple", "tomato", "grape"];
  const shortWords = words.filter((word) => word.length < 6);
  console.log(shortWords); // should output: ['peach', 'apple', 'grape']
  
  // Activity 5 - indexOf
  const myArray = [12, 34, 21, 54];
  const luckyNumber = 21;
  const luckyIndex = myArray.indexOf(luckyNumber);
  console.log(luckyIndex); // should output: 2
});
