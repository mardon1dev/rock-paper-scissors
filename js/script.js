const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

const recognition = new webkitSpeechRecognition();
recognition.lang = "uz-UZ";
recognition.start();
recognition.onresult = function(e){
  let tanlov = null;
  let transcript = e.results[0][0].transcript;
  tanlov = transcript;
  buttons.forEach(button=>{
    if (tanlov == transcript) {
      if(button.id == transcript){
        button.classList.add("opacity")
      }
      else{
        button.classList.remove("opacity")
      }
    }
  })
  const result = playRound(transcript, computerPlay());
  resultEl.textContent = result;
}

recognition.onend = function () {
  recognition.start();
};

recognition.onerror = function (event) {
  console.log('Speech recognition error: ', event.error);
  resultEl.textContent = "Ovoz tanib olinmadi, qaytadan urinib ko'ring.";
  recognition.start(); 
};

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const choices = ["tosh", "qogʻoz", "qaychi"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  const choices = ["tosh", "qogʻoz", "qaychi"];
  if (!choices.includes(playerSelection)) {
    return "Iltimos to'gri so'z ayting";
  }

  else if (playerSelection === computerSelection) {
    return "Durrang";
  } 
  else if (
    (playerSelection === "tosh" && computerSelection === "qaychi") ||
    (playerSelection === "qogʻoz" && computerSelection === "tosh") ||
    (playerSelection === "qaychi" && computerSelection === "qogʻoz")
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