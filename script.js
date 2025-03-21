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
  const displayHuman = document.getElementById("displayHuman");
  const displayComputer = document.getElementById("displayComputer");
  const text = document.getElementById("txt");
  if (hScore != 5 && cScore != 5){
    if (hChoice == "rock" && cChoice == 0) {
      text.innerHTML = "Its a tie";
      console.log("The score is : comp - " + cScore + " & Human - " + hScore);
    }
    else if (hChoice == "rock" && cChoice == 1) {
      cScore++;
      text.innerHTML = "Computer Wins";
      console.log("The score is : comp - " + cScore + " & Human - " + hScore);
      displayComputer.innerHTML = cScore;
    }
    else if (hChoice == "rock" && cChoice == 2) {
      hScore++;
      text.innerHTML = "Human Wins";
      console.log("The score is : comp - " + cScore + " & Human - " + hScore);
      displayHuman.innerHTML = hScore;
    }
    else if (hChoice == "paper" && cChoice == 0) {
      hScore++;
      text.innerHTML = "Human Wins";
      console.log("The score is : comp - " + cScore + " & Human - " + hScore);
      displayHuman.innerHTML = hScore;
    }
    else if (hChoice == "paper" && cChoice == 1) {
      text.innerHTML = "Its a tie";
      console.log("The score is : comp - " + cScore + " & Human - " + hScore);
    }
    else if (hChoice == "paper" && cChoice == 2) {
      cScore++;
      text.innerHTML = "Computer Wins";
      console.log("The score is : comp - " + cScore + " & Human - " + hScore);
      displayComputer.innerHTML = cScore;
    }
    else if (hChoice == "scissors" && cChoice == 0) {
      cScore++;
      text.innerHTML = "Computer Wins";
      console.log("The score is : comp - " + cScore + " & Human - " + hScore);
      displayComputer.innerHTML = cScore;
    }
    else if (hChoice == "scissors" && cChoice == 1) {
      hScore++;
      text.innerHTML = "Human Wins";
      console.log("The score is : comp - " + cScore + " & Human - " + hScore);
      displayHuman.innerHTML = hScore;
    }
    else if (hChoice == "scissors" && cChoice == 2) {
      text.innerHTML = "Its a tie";
      console.log("The score is : comp - " + cScore + " & Human - " + hScore);
    }
    else {
      console.log("Invalid Input");
    }
  }
  
  else{
    text.innerHTML = "Game Over";
  }
}

//-------------------------------------------------------------Display Score--------------------------------------------------------





// console.log("Final score is Comp - " + cScore + " & Hum - " + hScore);
