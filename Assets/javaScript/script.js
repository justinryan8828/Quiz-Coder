// creating my questions
var questions = [
  {
    question: "What is javaScript?",
    answer: "JavaScript is a very powerful client-side scripting language.",
    options: [
      "Its a cool coffee shop.",
      "JavaScript is a very powerful client-side scripting language.",
      "Basically the same thing as crypto.",
      "Will Smiths first cousin.",
    ],
  },
  {
    question: "What is not a javaScript data type?",
    answer: "Latte",
    options: ["Number", "String", "Latte", "Boolean"],
  },
  {
    question: "What company developed javaScript?",
    answer: "Netscape",
    options: ["Netscape", "HBO", "Franks Autosales", "Trico"],
  },
  {
    question: "Does JavaScript support automatic type conversion?",
    answer: "Yes",
    options: ["Yes", "No", "Maybe", "So"],
  },
  {
    question: "Which is not a looping structure in JavaScript?",
    answer: "Fruit",
    options: ["While", "Fruit", "Do-While Loops", "For"],
  },
];

// Need to call to my start button and my start section

var startButton = document.querySelector("#start-button");
var startSection = document.querySelector("#start");
var questionContainer = document.querySelector(".container");
var answerContainer = document.querySelector("#answer-buttons");
var questionResult = document.querySelector("#question-result");
var count = 0;
var nextButton = document.querySelector("#next-button");
var timerCount = 100;
var timerIntervals;
var timer = document.querySelector("#timer");
var viewHighscores = document.querySelector("#viewHighscores");

// create event for start button

startButton.addEventListener("click", function () {
  startSection.classList.add("hide");
  questionContainer.classList.remove("hide");
  displayQuestion();
  startTimer();
});

// figure out your timer bro

function startTimer() {
  timer.textContent = timerCount;
  timerIntervals = setInterval(function () {
    if (timerCount <= 0) {
      clearInterval(timerIntervals);
      endGame();
    }
    timerCount--;
    timer.textContent = timerCount;
  }, 1000);
}

// figure out how to get answers to show with tutor

answerContainer.addEventListener("click", function (event) {
  var selected = event.target;
  if (selected.matches("button")) {
    var answer = selected.textContent;

    if (answer === questions[count].answer) {
      questionResult.textContent = "CORRECT";
    } else {
      questionResult.textContent = "INCORRECT";
      timerCount -= 10;
    }
    nextButton.classList.remove("hide");
    answerContainer.classList.add("hide");
  }
});

// how do I display the questions

function displayQuestion() {
  answerContainer.innerHTML = "";
  var question = document.querySelector("#question");
  var currentQuestion = questions[count];
  question.textContent = questions[count].question;

  for (let i = 0; i < questions[count].options.length; i++) {
    let answerButton = document.createElement("button");
    answerButton.textContent = currentQuestion.options[i];
    answerContainer.appendChild(answerButton);
  }
}

// next button needs to take me to next questions and then at end take me to highscores html

nextButton.addEventListener("click", function () {
  if (count == questions.length - 1) {
    endGame();
  }
  nextButton.classList.add("hide");
  answerContainer.classList.remove("hide");
  questionResult.textContent = "";
  count++;
  displayQuestion();
});

// endgame should take me to highscores html

function endGame() {
  localStorage.setItem("newestScore", timerCount);
  window.location.href = "./highscores.html";
}

function goToHighscores() {
  clearInterval(timerIntervals);
  localStorage.setItem("newestScore", -1);
  window.location.href = "./highscores.html";
}

viewHighscores.addEventListener("click", goToHighscores);
