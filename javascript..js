function getComputerChoice() {
  // Declare randomNum value, which will store a random number from 1-3
  let randomNum = 0;
  // Get random number from 1-3, and store it into randomNum
  randomNum = Math.ceil(Math.random() * 3); // Generates random number 0-1, multiplies it by 3 and rounds it up
  // Declare choice variable, which will store the computer choice
  let choice = "";
  // Based on the number, assign the choice variable rock, paper, or scissors
  if (randomNum == 1) {
    choice = "rock";
  } else if (randomNum == 2) {
    choice = "paper";
  } else if (randomNum == 3) {
    choice = "scissors";
  } else {
    getComputerChoice(); // If randomNum = 0, redo the function
  }

  console.log("Computer choice: " + choice);

  return choice;
}
// Declare initial scores
let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
  const currentScoreHuman = document.getElementById("current-score-human")
  const currentScoreComputer = document.getElementById("current-score-computer")
  // Check if someone has reached 5 points
  if (humanScore == 5 || computerScore == 5) {
    displayFinalScores();
  } else {
    if (humanChoice == "paper" && computerChoice == "rock") {
      console.log("You won! Paper beats rock!");
      humanScore++;
      currentScoreHuman.innerText = `Your Current Score: ${humanScore}`
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
      console.log("You won! Rock beats scissors!");
      humanScore++;
      currentScoreHuman.innerText = `Your Current Score: ${humanScore}`
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      console.log("You won! Scissors beats paper!");
      humanScore++;
      currentScoreHuman.innerText = `Your Current Score: ${humanScore}`
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      console.log("You lost! Paper beats rock!");
      computerScore++;
      currentScoreComputer.innerText = `Computer's Current Score: ${computerScore}`
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      console.log("You lost! Rock beats scissors!");
      computerScore++;
      currentScoreComputer.innerText = `Computer's Current Score: ${computerScore}`
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      console.log("You lost! Scissors beats paper!");
      computerScore++;
      currentScoreComputer.innerText = `Computer's Current Score: ${computerScore}`
    } else if (humanChoice == computerChoice) {
      console.log("It's a draw!");
    } else {
      console.log("Please input a proper choice."); // If user input is not rock, paper, scissors
    }
  }
  // Based on the humanChoice and computerChoice, decide if the player won or lost
  // Increments the winners score by one
}

function displayFinalScores() {
  // Declare variable that holds all result elements
  const resultContainer = document.getElementById("results-container");

  const winner = document.createElement("h3");
  if (humanScore > computerScore) {
    winner.style.color = "green"
    winner.innerText = "You win!";
  } else {
    winner.style.color = "red"
    winner.innerText = "You lost!";
  }

  // Displays human score
  const humanResults = document.createElement("h4");
  humanResults.innerText = `Your score = ${humanScore}`;

  // Displays computer score
  const computerResults = document.createElement("h4");
  computerResults.innerText = `Computer Score = ${computerScore}`;

  // Adds the score displays to the container
  resultContainer.appendChild(winner);
  resultContainer.appendChild(humanResults);
  resultContainer.appendChild(computerResults);

  // Reveal results by turning display none to block
  resultContainer.style.display = "block";

  // Reset scores after game ends
  humanScore = 0;
  computerScore = 0;
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const buttons = document.getElementsByClassName("button");

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    switch (this.id) {
      case "rock":
        playRound("rock", getComputerChoice());
        break;

      case "paper":
        playRound("paper", getComputerChoice());
        break;

      case "scissors":
        playRound("scissors", getComputerChoice());
        break;
    }
  });
}
