// ------------------------------------------------------Computer Choice Function----------------------------------------------------

function getCompChoice() {
  return Math.floor(Math.random() * 3);
}

// -------------------------------------------------------Human Choice Function------------------------------------------------------

// function getHumChoice(){
//   let input = prompt("Enter your choice") ;
//   input = input.toLowerCase();
//   return input;

// ----------------------------------------------------------Event Addition----------------------------------------------------------
//----------------------------------------------------------New Human Choice---------------------------------------------------------

const rockBtn = document.querySelector("#Rock");
rockBtn.addEventListener("click", () => {
  playboy("rock");
  rockAudio.play();
});
const paperBtn = document.querySelector("#Paper");
paperBtn.addEventListener("click", () => {
  playboy("paper");
  paperAudio.play();
});
const scissorsBtn = document.querySelector("#Scissors");
scissorsBtn.addEventListener("click", () => {
  playboy("scissors");
  scissorsAudio.play();
});

// ----------------------------------------------------------Audio Addition----------------------------------------------------------

const rockAudio = document.querySelector(".rockAudio");
const paperAudio = document.querySelector(".paperAudio");
const scissorsAudio = document.querySelector(".scissorsAudio");
const winAudio = document.querySelector(".winAudio");
const loseAudio = document.querySelector(".loseAudio");

// ------------------------------------------------------------Score Card------------------------------------------------------------

let hScore = 0;
let cScore = 0;

// -------------------------------------------------------------Choices--------------------------------------------------------------

//                                                             Rock = 0 
//                                                             Paper = 1
//                                                            Scissors = 2

// ----------------------------------------------------------Main Function-----------------------------------------------------------

function playboy(hChoice) {
  let cChoice = getCompChoice();
  const displayHuman = document.getElementById("displayHuman");
  const displayComputer = document.getElementById("displayComputer");
  const text = document.getElementById("txt");
  if (hChoice == "rock" && cChoice == 0) {
    text.innerHTML = "Its a tie both chooses rock";
  }
  else if (hChoice == "rock" && cChoice == 1) {
    cScore++;
    text.innerHTML = "Computer wins it chooses paper";
    displayComputer.innerHTML = cScore;
  }
  else if (hChoice == "rock" && cChoice == 2) {
    hScore++;
    text.innerHTML = "Human Wins computer chooses scissors";
    displayHuman.innerHTML = hScore;
  }
  else if (hChoice == "paper" && cChoice == 0) {
    hScore++;
    text.innerHTML = "Human Wins computer chooses rock";
    displayHuman.innerHTML = hScore;
  }
  else if (hChoice == "paper" && cChoice == 1) {
    text.innerHTML = "Its a tie both chooses paper";
  }
  else if (hChoice == "paper" && cChoice == 2) {
    cScore++;
    text.innerHTML = "Computer Wins its chooses scissors";
    displayComputer.innerHTML = cScore;
  }
  else if (hChoice == "scissors" && cChoice == 0) {
    cScore++;
    text.innerHTML = "Computer Wins it chooses rock";
    displayComputer.innerHTML = cScore;
  }
  else if (hChoice == "scissors" && cChoice == 1) {
    hScore++;
    text.innerHTML = "Human Wins computer chooses paper";
    displayHuman.innerHTML = hScore;
  }
  else if (hChoice == "scissors" && cChoice == 2) {
    text.innerHTML = "Its a tie btoh chooses scissors";
  }
  if (hScore > 4 || cScore > 4){
    rockBtn.setAttribute("disabled", true);
    paperBtn.setAttribute("disabled", true);
    scissorsBtn.setAttribute("disabled", true);
      if (hScore > cScore){
        text.innerHTML = "Game Over You Win ;)"
        winAudio.play();
      }
      else{
        text.innerHTML = "Game Over You Lost :("
        loseAudio.play();
      }
  }
}

//---------------------------------------------------------------The End------------------------------------------------------------
