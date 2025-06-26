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

function playRound(computerChoice, humanChoice) {

  alert("You played " + humanChoice + " and computer played " + computerChoice + ".");

  switch (humanChoice) {
    case "rock":
      if (computerChoice == "rock") {
        alert("tied round!");
        return "tied";
      } else if (computerChoice == "paper") {
        alert("You lose, paper beats rock!");
        return "computer";
      } else {
        alert("You win, rock beats scissors!");
        return "human";
      }

    case "paper":
      if (computerChoice == "paper") {
        alert("tied round!");
        return "tied";
      } else if (computerChoice == "rock") {
        alert("You win, paper beats rock!");
        return "human";
      } else {
        alert("You lose, scissors beats paper!");
        return "computer";
      }

    case "scissors":
      if (computerChoice == "scissors") {
        alert("tied round!");
        return "tied";
      } else if (computerChoice == "paper") {
        alert("You win, scissors beats paper!");
        return "human";
      } else {
        alert("You lose, rock beats scissors!");
        return "computer";
      }
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 0;

  while (round < 3) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    let result = playRound(computerChoice, humanChoice);

    switch (result) {
      case "human":
        humanScore++;
        round++
        break;

      case "computer":
        computerScore++;
        round++
        break;
    }
    alert("Current score: " + humanScore + ":" + computerScore);
  }

  if (humanScore > computerScore) {
    alert("You win! " + humanScore + ":" + computerScore);
  } else {
    alert("You lose... " + humanScore + ":" + computerScore);
  }
}

do {
  playGame()
  let newGame;
  let yesOrNo = prompt("New game? (yes or no)");
  if (yesOrNo == "yes") {
    newGame = true;
  } else {
    newGame = false;
  }
} while (newGame == true);