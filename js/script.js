const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
  });
});

function computerPlay() {
  const choices = ["tosh", "qog'oz", "qaychi"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Durrang";
  } else if (
    (playerSelection === "tosh" && computerSelection === "qaychi") ||
    (playerSelection === "qog'oz" && computerSelection === "tosh") ||
    (playerSelection === "qaychi" && computerSelection === "qog'oz")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "G'alaba! " + playerSelection + " " + computerSelection + "ni yutdi.";
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "Mag'lubiyat. " + computerSelection + " " + playerSelection + "ni yutdi.";
  }
}