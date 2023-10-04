document.addEventListener("DOMContentLoaded", init);

function init() {
  const player = document.getElementById("player-name");
  const playerName = getUrlParam("name");
  if (playerName) {
    player.innerText = playerName;
  }

  getQuestion(); // Call the getQuestion function to display the first question.
}

function getQuestion() {
  const questionElement = document.querySelector("#quiz p");
  const choiceAElement = document.querySelector("#choice-A");
  const choiceBElement = document.querySelector("#choice-B");
  const choiceCElement = document.querySelector("#choice-C");

  const currentQuestion = questions[0]; // Get the first question from the array

  // Update the HTML elements with the question and choices from the currentQuestion
  questionElement.textContent = currentQuestion.question;
  choiceAElement.textContent = currentQuestion.choiceA;
  choiceBElement.textContent = currentQuestion.choiceB;
  choiceCElement.textContent = currentQuestion.choiceC;
}

function getUrlParam(paramName) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramName);
}
