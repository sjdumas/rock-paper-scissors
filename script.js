const getComputerChoice = () => {
	const choices = ["rock", "paper", "scissors"];
	const randomChoice = Math.floor(Math.random() * choices.length);
	return choices[randomChoice];
};

const getHumanChoice = () => {
	let option = prompt(
		"Type an option: rock, paper, or scissors: ",
		""
	).toLowerCase();

	switch (option) {
		case "rock":
		case "paper":
		case "scissors":
			return option;

		default:
			alert("You didn't pick a valid option. Please try again.");
			return getHumanChoice(); // Ask the user again for valid input/choice.
	}
};

const playGame = () => {
	let humanScore = 0;
	let computerScore = 0;

	const playRound = (humanChoice, computerChoice) => {
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
			console.log(
				`You win! ${
					humanChoice.charAt(0).toUpperCase() + 
                    humanChoice.slice(1)
				} beats ${computerChoice}`
			);
			return "human";
		} else if (humanChoice === computerChoice) {
			console.log("It's a tie!");
			return "tie";
		} else {
			console.log(
				`You lose! ${
					computerChoice.charAt(0).toUpperCase() +
					computerChoice.slice(1)
				} beats ${humanChoice}`
			);
			return "computer";
		}
	};

	// Play 5 rounds of the game.
	for (let i = 0; i < 5; i++) {
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();
		let winner = playRound(humanSelection, computerSelection);

		switch (winner) {
			case "human":
				humanScore++;
				console.log(`You win round ${i + 1}`);
				break;

			case "computer":
				computerScore++;
				console.log(`The computer wins round ${i + 1}`);
				break;

			default:
				console.log(`Round ${i + 1} is a tie.`);
				break;
		}
	}
	console.log(`Here are the final scores: You: ${humanScore}, Computer: ${computerScore}`);
};

playGame();
