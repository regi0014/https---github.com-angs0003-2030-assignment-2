document.addEventListener("DOMContentLoaded", init);

function init() {
  const player = document.getElementById("player-name");
  const playerName = getUrlParam("name");
  if (playerName) {
    player.innerText = playerName;
  }

  getQuestion(); // Call the getQuestion function to display the first question.

  const nextButton = document.querySelector("input[type='button']");
  nextButton.addEventListener("click", next); // Add event listener to the next button.
}

function getQuestion() {
  const questionElement = document.querySelector("#quiz p");
  const choiceAElement = document.querySelector("#choice-A");
  const choiceBElement = document.querySelector("#choice-B");
  const choiceCElement = document.querySelector("#choice-C");

  const currentQuestion = questions[currentQuestionNumber]; // Get the current question from the array.

  // Update the HTML elements with the question and choices from the currentQuestion.
  questionElement.textContent = `Question ${currentQuestionNumber + 1}`;
  choiceAElement.textContent = currentQuestion.choiceA;
  choiceBElement.textContent = currentQuestion.choiceB;
  choiceCElement.textContent = currentQuestion.choiceC;
}

function next(event) {
  currentQuestionNumber++;

  if (currentQuestionNumber < questions.length) {
    getQuestion();
  } else {
    event.target.style.display = "none"; // Hide the next button when no more questions.
  }

  clearSelection("choices"); // Clear the previous selection.
}

function getUrlParam(paramName) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramName);
}

let currentQuestionNumber = 0;
