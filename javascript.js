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

const paraChoices = document.createElement("p");
const paraResult = document.createElement("p");
const paraScore = document.createElement("p");
container.appendChild(paraScore);
container.appendChild(paraChoices);
container.appendChild(paraResult);

const buttonNewGame = document.createElement("button");
buttonNewGame.textContent = "New Game";
buttonNewGame.style.display = "none";
container.appendChild(buttonNewGame);


function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 0;

  function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    paraChoices.textContent = ("You played " + humanChoice + " and computer played " + computerChoice + ".")


    switch (humanChoice) {
      case "rock":
        if (computerChoice == "rock") {
          paraResult.textContent = ("tied round!");
        } else if (computerChoice == "paper") {
          paraResult.textContent = ("You lose the round, paper beats rock!");
          computerScore++;
          round++;
        } else {
          paraResult.textContent = ("You win the round, rock beats scissors!");
          humanScore++;
          round++;
        }
        break;
      case "paper":
        if (computerChoice == "paper") {
          paraResult.textContent = ("tied round!");
        } else if (computerChoice == "rock") {
          paraResult.textContent = ("You win the round, paper beats rock!");
          humanScore++;
          round++;
        } else {
          paraResult.textContent = ("You lose the round, scissors beats paper!");
          computerScore++;
          round++;
        }
        break;
      case "scissors":
        if (computerChoice == "scissors") {
          paraResult.textContent = ("tied round!");
        } else if (computerChoice == "paper") {
          paraResult.textContent = ("You win the round, scissors beats paper!");
          humanScore++;
          round++;
        } else {
          paraResult.textContent = ("You lose the round, rock beats scissors!");
          computerScore++;
          round++;
        }
        break;
    }

    paraScore.textContent = ("Current score: " + humanScore + ":" + computerScore);


    if (round == 3) {
      if (humanScore > computerScore) {
        paraScore.textContent = ("You win! " + humanScore + ":" + computerScore);
      } else {
        paraScore.textContent = ("You lose... " + humanScore + ":" + computerScore);
      }
      buttonNewGame.style.display = "inline-block";
      buttonRock.disabled = true;
      buttonPaper.disabled = true;
      buttonScissors.disabled = true;

    }
  }

  buttonPaper.addEventListener("click", () => playRound("paper"));
  buttonRock.addEventListener("click", () => playRound("rock"));
  buttonScissors.addEventListener("click", () => playRound("scissors"));

  buttonNewGame.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    round = 0;

    paraChoices.textContent = "";
    paraResult.textContent = "";
    paraScore.textContent = "New game started!";
    buttonNewGame.style.display = "none";

    buttonRock.disabled = false;
    buttonPaper.disabled = false;
    buttonScissors.disabled = false;
  })
}

playGame();