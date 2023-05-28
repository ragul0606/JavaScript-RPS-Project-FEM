"use strict";

let userScore = 0;
let computerScore = 0;

// we are going to develope an application where user and computer can play a game

// whenever user plays the game computer have to generate a random answer and compare the result with the user's answer. and also display the results

// 1 - Get input from the user
function playGame(userInput) {
  if (userScore >= 5 || computerScore >= 5) {
    if (userScore > computerScore) {
      console.log(`User WON`);
    } else if (computerScore > userScore) {
      console.log(`You LOST`);
    } else {
      console.log(`Game DRAW`);
    }
    console.log(`!-----------------GAME OVER-----------------!`);
  } else {
    const userChoice = userInput;
    const computerChoice = getCompChoice();
    const result = getResult(userChoice, computerChoice);
    updateScores(result);
    displayResults(userChoice, computerChoice, result);
  }
}
// 2 - Generate random answer
function getCompChoice() {
  const randomNumber = Math.trunc(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
}

// 3 - Compare the scores of computer and user choice and generate results

function getResult(userChoice, computerChoice) {
  if (userChoice === "rock") {
    if (computerChoice === "rock") {
      return "DRAW";
    } else if (computerChoice === "paper") {
      return "LOST";
    } else if (computerChoice === "scissors") {
      return "WON";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "WON";
    } else if (computerChoice === "paper") {
      return "DRAW";
    } else if (computerChoice === "scissors") {
      return "LOST";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "LOST";
    } else if (computerChoice === "paper") {
      return "WON";
    } else if (computerChoice === "scissors") {
      return "DRAW";
    }
  }
}

// 4 - based on inputs increase scores

function updateScores(result) {
  if (result === "WON") {
    userScore = userScore + 1;
  }
  if (result === "LOST") {
    computerScore = computerScore + 1;
  }
}

// 5 - Display Results
function displayResults(userChoice, computerChoice, result) {
  console.log(`User selected ${userChoice}`);
  console.log(`Computer selected ${computerChoice}`);
  console.log(`Result: ${result}`);
  console.log(`User Score: ${userScore}`);
  console.log(`Computer Score: ${computerScore}`);
  console.log(`!-------------------Next Game-------------------!`);
}

// Game logic

playGame("rock");
playGame("scissors");
playGame("paper");
playGame("paper");
playGame("rock");
playGame("scissors");
playGame("rock");
playGame("scissors");
playGame("rock");
playGame("paper");
playGame("paper");
playGame("rock");
playGame("scissors");
playGame("rock");
playGame("scissors");
playGame("rock");
