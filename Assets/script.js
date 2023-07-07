var questions = [
  {
    question: "Question 1?",
    answer: "Answer 1!",
    options: ["1", "Answer 1!", "3", "4"],
  },
  {
    question: "Question 2?",
    answer: "Answer 2!",
    options: ["1", "2", "Answer 2!", "4"],
  },
  {
    question: "Question 3?",
    answer: "Answer 3!",
    options: ["Answer 3!", "2", "3", "4"],
  },
  {
    question: "Question 4?",
    answer: "Answer 4!",
    options: ["1", "2", "3", "Answer 4!"],
  },
  {
    question: "Question 5?",
    answer: "Answer 5!",
    options: ["1", "Answer 5!", "3", "4"],
  },
];

var startButton = document.querySelector("#start-button");
var startSection = document.querySelector("#start");
var questionContainer = document.querySelector(".container");
var answerContainer = document.querySelector("#answer-buttons");
var questionResult = document.querySelector("#question-result");
var count = 0;
var nextButton = document.querySelector("#next-button");
var scoreCount = 0;
var timerCount = 100;
var timerIntervals;
var timer = document.querySelector("#timer");

startButton.addEventListener("click", function () {
  startSection.classList.add("hide");
  questionContainer.classList.remove("hide");
  displayQuestion();
  startTimer();
});

function startTimer() {
  timer.textContent = timerCount;
  timerIntervals = setInterval(function () {
    if (timerCount <= 0) {
      endGame();
      clearInterval(timerIntervals);
    }
    timerCount--;
    timer.textContent = timerCount;
  }, 1000);
}

answerContainer.addEventListener("click", function (event) {
  var selected = event.target;
  if (selected.matches("button")) {
    var answer = selected.textContent;

    console.log(answer, questions[count].answer);

    if (answer === questions[count].answer) {
      console.log("CORRRECT");
      questionResult.textContent = "CORRECT";
      scoreCount += 10;
      console.log(scoreCount);
    } else {
      questionResult.textContent = "INCORRECT";
      timerCount -= 10;
      console.log(timerCount);
      console.log("INCORRECT");
    }
    nextButton.classList.remove("hide");
    answerContainer.classList.add("hide");
  }
});

function displayQuestion() {
  answerContainer.innerHTML = "";
  var question = document.querySelector("#question");
  var currentQuestion = questions[count];
  question.textContent = questions[count].question;

  for (let i = 0; i < questions[count].options.length; i++) {
    console.log(currentQuestion.options[i]);
    let answerButton = document.createElement("button");
    answerButton.textContent = currentQuestion.options[i];
    answerContainer.appendChild(answerButton);
  }
}

nextButton.addEventListener("click", function () {
  console.log(count, questions.length);
  if (count == questions.length) {
    endGame();
  }
  nextButton.classList.add("hide");
  answerContainer.classList.remove("hide");
  questionResult.textContent = "";
  count++;
  displayQuestion();
});

function endGame() {
  window.location.href = "./highscores.html";
}

// Need to make answers pop up and timer to start when start clicks
// Need to show if answer if correct or incorrect
// If wrong need to subtract 10 seconds from timer
// Need to make next button work after each question is right or wrong
// Need to make it document some sort of point system
// Need to make next button bring up next question and answers
// Need to make quiz end when timer ends
// Need to allow you to put name when quiz is over and store your score under highscores page
