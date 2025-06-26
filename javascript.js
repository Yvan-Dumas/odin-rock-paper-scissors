function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("What do you want to play?");
}

function playRound(computerChoice, humanChoice) {
  
  console.log("You played " + humanChoice + " and computer played " + computerChoice + ".");
  
  switch (humanChoice) {
    case "rock": 
      if (computerChoice == "rock") {
        console.log("tied round!");
      } else if (computerChoice == "paper") {
        console.log("You lose, paper beats rock!");
        computerScore++;
      } else {
        console.log("You win, rock beats scissors!");
        humanScore++;
      }
      break;

    case "paper": 
      if (computerChoice == "paper") {
        console.log("tied round!");
      } else if (computerChoice == "rock") {
        console.log("You win, paper beats rock!");
        humanScore++;
      } else {
        console.log("You lose, scissors beats paper!");
        computerScore++;
      }
      break;

    case "scissors": 
      if (computerChoice == "scissors") {
        console.log("tied round!");
      } else if (computerChoice == "paper") {
        console.log("You win, scissors beats paper!");
        humanScore++;
      } else {
        console.log("You lose, rock beats scissors!");
        computerScore++;
      }
      break;
  }
}

let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice().toLowerCase();
const computerChoice = getComputerChoice();