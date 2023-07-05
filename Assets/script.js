var questions = [
  {
    question: "Question 1?",
    answer: "Answer 1!",
    options: ["1", "Answer1!", "3", "4"],
  },
  {
    question: "Question 2?",
    answer: "Answer 2!",
    options: ["1", "2", "Answer2!", "4"],
  },
  {
    question: "Question 3?",
    answer: "Answer 3!",
    options: ["Answer3!", "2", "3", "4"],
  },
  {
    question: "Question 4?",
    answer: "Answer 4!",
    options: ["1", "2", "3", "Answer4!"],
  },
  {
    question: "Question 5?",
    answer: "Answer 5!",
    options: ["1", "Answer5!", "3", "4"],
  },
];

var startButton = document.querySelector("#start-button");
var startSection = document.querySelector("#start");
var questionContainer = document.querySelector(".container");
var count = 0;

startButton.addEventListener("click", function () {
  startSection.classList.add("hide");
  questionContainer.classList.remove("hide");
  displayQuestion();
});

function displayQuestion() {
  var question = document.querySelector("#question");
  question.innerHTML = questions[count].question;
  for (let i = 0; i < questions[count].options.length; i++) {}
}
