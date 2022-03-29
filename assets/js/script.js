/*---------------------------- Global variables ---------------------------*/
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    options: {
      option1: "string",
      option2: "alert",
      option3: "boolean",
      option4: "number",
      answer: "alert",
    },
  },
];
var time = 90;

/*----------------------------- HTML elements -----------------------------*/
var startScreenEl = document.querySelector("#start-screen");
var quizEl = document.querySelector("#quiz");
var endScreenEl = document.querySelector("#end-screen");
var highScoresEl = document.querySelector("#high-scores");
var startQuizButtonEl = document.querySelector("#start-quiz");
var timerEl = document.querySelector("#timer");

var clearSections = function () {
  startScreenEl.innerHTML = "";
  endScreenEl.innerHTML = "";
  highScoresEl.innerHTML = "";
  quizEl.innerHTML = "";

  console.log("Cleared sections");
};

var startQuizHandler = function (event) {
  // Clear all sections
  clearSections();

  // Begin quiz timer
  time = 3;
  var timer = setInterval(function () {
    // Decrement time and update timer display
    time--;
    timerEl.innerHTML = "Time: " + time;

    // Check if time has ran out
    if (time <= 0) {
      clearInterval(timer);
      clearSections();
    }
  }, 1000);
};

/*---------------------------- Event listeners ----------------------------*/
startQuizButtonEl.addEventListener("click", startQuizHandler);
