var scoreContainer = document.querySelector("#scoreContainer");
var currentScores;
var inputinitials = document.querySelector("#initials");
var form = document.querySelector("form");
var backButton = document.querySelector("#back-button");

function displayScores() {
  scoreContainer.innerHTML = "";
  currentScores = JSON.parse(localStorage.getItem("allScores"));
  let scoreList = document.createElement("ol");

  for (var i = 0; i < currentScores.length; i++) {
    let scoreItem = document.createElement("li");

    let scoreInitial = document.createElement("h3");
    scoreInitial.textContent = currentScores[i].initials;

    let scoreX = document.createElement("p");
    scoreX.textContent = currentScores[i].score;

    scoreItem.setAttribute("class", "item");
    scoreItem.appendChild(scoreInitial);
    scoreItem.appendChild(scoreX);

    scoreList.appendChild(scoreItem);
  }
  scoreContainer.appendChild(scoreList);
}

function finishedScore(event) {
  event.preventDefault();
  currentScores = JSON.parse(localStorage.getItem("allScores"));
  if (currentScores === null) {
    currentScores = [];
  }

  newestScore = JSON.parse(localStorage.getItem("newestScore"));
  let newHighscore = {
    initials: inputinitials.value.trim(),
    score: newestScore,
  };
  currentScores.push(newHighscore);
  localStorage.setItem("allScores", JSON.stringify(currentScores));
  displayScores();
}

let newestScore = JSON.parse(localStorage.getItem("newestScore"));
if (newestScore === -1) {
}

backButton.addEventListener("click", function () {
  window.location.href = "./index.html";
});

function backButton() {
  window.location.href = "./index.html";
}

form.addEventListener("submit", finishedScore);