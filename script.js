// ------------------------------------------------------Computer Choice Function----------------------------------------------------

function getCompChoice() {
  return Math.floor(Math.random() * 3);
}

// -------------------------------------------------------Human Choice Function------------------------------------------------------



// ----------------------------------------------------------Event Addition----------------------------------------------------------

const Rock = document.querySelector("#Rock");
Rock.addEventListener("click", () => {
  playboy("rock");
});
const Paper = document.querySelector("#Paper");
Paper.addEventListener("click", () => {
  playboy("paper");
});
const Scissors = document.querySelector("#Scissors");
Scissors.addEventListener("click", () => {
  playboy("scissors");
});

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
  if (hChoice == "rock" && cChoice == 0) {
    console.log("Its a tie");
    console.log("The score is : comp - " + cScore + " & Human - " + hScore);
  }
  else if (hChoice == "rock" && cChoice == 1) {
    cScore = cScore + 1;
    console.log("Computer Wins");
    console.log("The score is : comp - " + cScore + " & Human - " + hScore);
    return cScore;
  }
  else if (hChoice == "rock" && cChoice == 2) {
    hScore = hScore + 1;
    console.log("Human Wins");
    console.log("The score is : comp - " + cScore + " & Human - " + hScore);
    return hScore;
  }
  else if (hChoice == "paper" && cChoice == 0) {
    hScore = hScore + 1;
    console.log("Human Wins");
    console.log("The score is : comp - " + cScore + " & Human - " + hScore);
    return hScore;
  }
  else if (hChoice == "paper" && cChoice == 1) {
    console.log("Its a tie");
    console.log("The score is : comp - " + cScore + " & Human - " + hScore);
  }
  else if (hChoice == "paper" && cChoice == 2) {
    cScore = cScore + 1;
    console.log("Computer Wins");
    console.log("The score is : comp - " + cScore + " & Human - " + hScore);
    return cScore;
  }
  else if (hChoice == "scissors" && cChoice == 0) {
    cScore = cScore + 1;
    console.log("Computer Wins");
    console.log("The score is : comp - " + cScore + " & Human - " + hScore);
    return cScore;
  }
  else if (hChoice == "scissors" && cChoice == 1) {
    hScore = hScore + 1;
    console.log("Human Wins");
    console.log("The score is : comp - " + cScore + " & Human - " + hScore);
    return hScore;
  }
  else if (hChoice == "scissors" && cChoice == 2) {
    console.log("Its a tie");
    console.log("The score is : comp - " + cScore + " & Human - " + hScore);
  }
  else {
    console.log("Invalid Input");
  }
}

//-------------------------------------------------------------Display Score--------------------------------------------------------

const displayHuman = document.querySelector("#displayHuman");
displayHuman.innerHTML = hScore;
const displayComputer = document.querySelector("#displayComputer");
displayComputer.innerHTML = cScore;

// console.log("Final score is Comp - " + cScore + " & Hum - " + hScore);

function scoreCard() {

}
// 
