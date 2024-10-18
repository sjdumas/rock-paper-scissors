const buttons = document.querySelectorAll("button");
const resultDiv = document.querySelector("#result");
const score = document.querySelector("#score");
const gameWinner = document.querySelector("#game-winner");
const resetButton = document.querySelector("#reset-btn");

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
	const choices = ["rock", "paper", "scissors"];
	const randomChoice = Math.floor(Math.random() * choices.length);
	return choices[randomChoice];
};

const playRound = (humanChoice) => {
	const computerChoice = getComputerChoice();
	let roundResult;
	/*
		Game Rules:
		1. Rock breaks scissors
		2. Scissors cuts paper
		3. Paper covers rock
		4. If both players select the same choice, it's a tie.
	*/
	if (
		(humanChoice === "rock" && computerChoice === "scissors") ||
		(humanChoice === "paper" && computerChoice === "rock") ||
		(humanChoice === "scissors" && computerChoice === "paper")
	) {
		humanScore++;
		roundResult = `You win! ${capitalizeFirstLetter(
			humanChoice
		)} beats ${capitalizeFirstLetter(computerChoice)}.`;
	} else if (humanChoice === computerChoice) {
		roundResult = `It's a tie!`;
	} else {
		computerScore++;
		roundResult = `You lose! ${capitalizeFirstLetter(
			computerChoice
		)} beats ${capitalizeFirstLetter(humanChoice)}.`;
	}

	resultDiv.textContent = roundResult;
	score.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;

	if (humanScore === 5) {
		gameWinner.textContent = "Awesome! You won the game.";
		showResetButton();
	} else if (computerScore === 5) {
		gameWinner.textContent = "The computer won the game.";
		showResetButton();
	}
};

const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

const resetGame = () => {
	humanScore = 0;
	computerScore = 0;
	score.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;
	gameWinner.textContent = "";
};

const showResetButton = () => {
	resetButton.style.display = "block";
};

const hideResetButton = () => {
	resetButton.style.display = "none";
};

resetButton.addEventListener("click", () => {
	resetGame();
	hideResetButton();
});

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		let playerSelection;

		switch (button.id) {
			case "rock-btn":
				playerSelection = "rock";
				break;

			case "paper-btn":
				playerSelection = "paper";
				break;

			case "scissors-btn":
				playerSelection = "scissors";
				break;

			default:
				break;
		}

		playRound(playerSelection);
	});
});
