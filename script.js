'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20;
let highScore = 0;
document.querySelector(".highscore").textContent = Number(highScore);
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess)

  // when there is no input
  if (!guess) {
    displayMessage("â No Number")

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage("ð Correct Number");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      document.querySelector(".highscore").textContent = score;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    document.querySelector(".message").textContent =
      guess > secretNumber ? "ð Too high!" : "ð Too low";
    score--;
    document.querySelector(".score").textContent = score;
  }
  else {
    displayMessage("ð¥You lost the game");
    document.querySelector(".score").textContent = 0
  }


})
document.querySelector(".again").addEventListener("click", function () {

  score = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem"

})

