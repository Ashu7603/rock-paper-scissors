// Computer Choice Function
function getCompChoice(){
  return Math.floor(Math.random()*3);
}

// Human Choice Function
function getHumChoice(){
  let input = prompt("Enter your choice") ;
  input = input.toLowerCase();
  return input;
}

// Score Card
let hScore = 0;
let cScore = 0;


// Choices
// Rock = 0 
// Paper = 1
// Scissors = 2

function playboy(){
  let hChoice = getHumChoice();
  let cChoice = getCompChoice();
  if (hChoice == "rock" && cChoice == 0){
    console.log("Its a tie");
    console.log("The score is : comp - " + cScore + " & Human - " + hScore);
  }
  else if (hChoice == "rock" && cChoice == 1){
    cScore = cScore + 1;
    console.log("Computer Wins");
    console.log("The score is : comp - " + cScore + " & Human - " + hScore);
  }
  else if (hChoice == "rock" && cChoice == 2){
    hScore = hScore + 1;
    console.log("Human Wins");
    console.log("The score is : comp - " + cScore + " & Human - " + hScore);
  }
  else if (hChoice == "paper" && cChoice == 0){
    hScore = hScore + 1;
    console.log("Human Wins");
    console.log("The score is : comp - " + cScore + " & Human - " + hScore);
  }
  else if (hChoice == "paper" && cChoice == 1){
    console.log("Its a tie");
    console.log("The score is : comp - " + cScore + " & Human - " + hScore);
  }
  else if (hChoice == "paper" && cChoice == 2){
    cScore = cScore + 1;
    console.log("Computer Wins");
    console.log("The score is : comp - " + cScore + " & Human - " + hScore);
  }
  else if (hChoice == "scissors" && cChoice == 0){
    cScore = cScore + 1;
    console.log("Computer Wins");
    console.log("The score is : comp - " + cScore + " & Human - " + hScore);
  }
  else if (hChoice == "scissors" && cChoice == 1){
    hScore = hScore + 1;
    console.log("Human Wins");
    console.log("The score is : comp - " + cScore + " & Human - " + hScore);
  }
  else if (hChoice == "scissors" && cChoice == 2){
    console.log("Its a tie");
    console.log("The score is : comp - " + cScore + " & Human - " + hScore);
  }
  else{
    console.log("Invalid Input");
  }
  
}

playboy();
playboy();
playboy();
playboy();
playboy();

console.log("Final score is Comp - " + cScore + " & Hum - " + hScore);