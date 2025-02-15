// gpa.js

function getGrades(inputSelector) {
  // Get grades from the input box
  const grades = document.querySelector(inputSelector).value;
  // Split them into an array (String.split(','))
  const gradesArray = grades.split(",");
  // Clean up any extra spaces, and make the grades all uppercase (Array.map())
  const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
  console.log(cleanGrades);
  // Return grades
  return cleanGrades;
}

function lookupGrade(grade) {
  // Converts the letter grade to its GPA point value and returns it
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  } else if (grade === "C") {
    points = 2;
  } else if (grade === "D") {
    points = 1;
  }
  return points;
}

function calculateGpa(grades) {
  // Convert the letter grades to gpa points
  const gradePoints = grades.map((grade) => lookupGrade(grade));
  // Calculate the GPA
  const gpa = gradePoints.reduce((total, num) => total + num) / gradePoints.length;
  // Return the GPA rounded to 2 decimal points
  return gpa.toFixed(2);
}

function outputGpa(gpa, selector) {
  // Display the GPA in the HTML element identified by the selector
  const outputElement = document.querySelector(selector);
  outputElement.innerText = gpa;
}

function clickHandler() {
  // Get the grades entered into the input
  const grades = getGrades("#grades");
  // Calculate the GPA from the grades entered
  const gpa = calculateGpa(grades);
  // Display the GPA
  outputGpa(gpa, "#output");
}

// Add an event listener to the button to call clickHandler when clicked
document.querySelector("#submitButton").addEventListener("click", clickHandler);
