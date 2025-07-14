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
  return prompt("What do you want to play?").toLowerCase();
}


// UI
const container = document.querySelector("#container");

const buttonRock = document.createElement("button");
buttonRock.textContent = "Rock";
const buttonPaper = document.createElement("button");
buttonPaper.textContent = "Paper";
const buttonScissors = document.createElement("button");
buttonScissors.textContent = "Scissors";

container.appendChild(buttonRock);
container.appendChild(buttonPaper);
container.appendChild(buttonScissors);



function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 0;

  function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    const paraChoices = document.createElement("p");
    paraChoices.textContent = ("You played " + humanChoice + " and computer played " + computerChoice + ".")
    container.appendChild(paraChoices);

    const paraResult = document.createElement("p");
    switch (humanChoice) {
      case "rock":
        if (computerChoice == "rock") {
          paraResult.textContent = ("tied round!");
        } else if (computerChoice == "paper") {
          paraResult.textContent = ("You lose, paper beats rock!");
          computerScore++;
          round++;
        } else {
          paraResult.textContent = ("You win, rock beats scissors!");
          humanScore++;
          round++;
        }
      case "paper":
        if (computerChoice == "paper") {
          paraResult.textContent = ("tied round!");
        } else if (computerChoice == "rock") {
          paraResult.textContent = ("You win, paper beats rock!");
          humanScore++;
          round++;
        } else {
          paraResult.textContent = ("You lose, scissors beats paper!");
          computerScore++;
          round++;
        }
      case "scissors":
        if (computerChoice == "scissors") {
          paraResult.textContent = ("tied round!");
        } else if (computerChoice == "paper") {
          paraResult.textContent = ("You win, scissors beats paper!");
          humanScore++;
          round++;
        } else {
          paraResult.textContent = ("You lose, rock beats scissors!");
          computerScore++;
          round++;
        }
    }
    container.appendChild(paraResult);
  }

  const paraScore = document.createElement("p");
  paraScore.textContent = ("Current score: " + humanScore + ":" + computerScore);

  if (humanScore > computerScore) {
    paraScore.textContent = ("You win! " + humanScore + ":" + computerScore);
  } else {
    paraScore.textContent = ("You lose... " + humanScore + ":" + computerScore);
  }

  buttonPaper.addEventListener("click", () => playRound("paper"));
  buttonRock.addEventListener("click", () => playRound("rock"));
  buttonScissors.addEventListener("click", () => playRound("scissors"));
}

/*
let newGame;
do {
  playGame()
  let yesOrNo = prompt("New game? (yes or no)").toLowerCase();
  if (yesOrNo == "yes") {
    newGame = true;
  } else {
    newGame = false;
  }
} while (newGame == true);
*/

playGame();