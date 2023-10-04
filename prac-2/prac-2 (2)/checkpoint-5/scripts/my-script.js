document.addEventListener("DOMContentLoaded", init);

let currentQuestionNumber = 0;
let correctAnswers = 0;


function init() {
  const player = document.getElementById("player-name");
  const playerName = getUrlParam("name");
  if (playerName) {
    player.innerText = playerName;
  }

  getQuestion();

  const nextButton = document.querySelector("input[type='button']");
  nextButton.addEventListener("click", next); 
}

function getQuestion() {
  const questionNumberElement = document.querySelector("#question-number");
  const questionTextElement = document.querySelector("#question-text");
  const choiceAElement = document.querySelector("#choice-A");
  const choiceBElement = document.querySelector("#choice-B");
  const choiceCElement = document.querySelector("#choice-C");

  const currentQuestion = questions[currentQuestionNumber]; 

  questionNumberElement.textContent = `Question ${currentQuestionNumber + 1}:`;
  questionTextElement.textContent = currentQuestion.question; 
  choiceAElement.textContent = currentQuestion.choiceA;
  choiceBElement.textContent = currentQuestion.choiceB;
  choiceCElement.textContent = currentQuestion.choiceC;
}

function next(event) {
  currentQuestionNumber++;

  if (currentQuestionNumber < questions.length) {
    getQuestion();
  } else {
    event.target.style.display = "none"; 
    showResults(); 
  }

  clearSelection("choices"); 
  const selectedAnswer = getSelection("choices");
  const currentQuestion = questions[currentQuestionNumber];

  if (selectedAnswer === currentQuestion.answer) {
    correctAnswers++;
  }
}

function getUrlParam(paramName) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramName);
}

// function showResults() {
//   const totalQuestions = questions.length;
//   const scorePercentage = (correctAnswers / totalQuestions) * 100;
//   let scoreReport = "";

//   if (scorePercentage < 30) {
//     scoreReport = `Bad luck. Your final score was ${scorePercentage.toFixed(1)}% (${correctAnswers}/${totalQuestions}).`;
//   } else if (scorePercentage >= 30 && scorePercentage <= 75) {
//     scoreReport = `Not bad. Your final score was ${scorePercentage.toFixed(1)}% (${correctAnswers}/${totalQuestions}).`;
//   } else {
//     scoreReport = `Impressive. Your final score was ${scorePercentage.toFixed(1)}% (${correctAnswers}/${totalQuestions}).`;
//   }

//   const resultsDiv = document.getElementById("results");
//   const resultsParagraph = resultsDiv.querySelector("p");
//   resultsParagraph.textContent = scoreReport;

//   const quizDiv = document.getElementById("quiz");
//   quizDiv.style.display = "none";
//   resultsDiv.style.display = "block";
// }

