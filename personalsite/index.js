// index.js

// Function to set the greeting based on the time of day
function setGreeting() {
  const greetingElement = document.getElementById('greeting');
  
  if (!greetingElement) {
    console.error("Greeting element not found!");
    return;
  }

  const currentHour = new Date().getHours();
  let greetingMessage = "Welcome, Tenno!";

  if (currentHour >= 5 && currentHour < 12) {
    greetingMessage = "Good Morning, Tenno!";
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingMessage = "Good Afternoon, Tenno!";
  } else if (currentHour >= 18 && currentHour < 22) {
    greetingMessage = "Good Evening, Tenno!";
  } else {
    greetingMessage = "Good Night, Tenno!";
  }

  greetingElement.textContent = greetingMessage; // Update the greeting text
}

// Call the setGreeting function when the page loads
window.onload = setGreeting;
