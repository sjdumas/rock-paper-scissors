const getComputerChoice = () => {
	// Randomly return the words "rock", "paper", or "scissors".
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
            
            The human player always wins if these conditions are met:
                If the human player selects rock and the computer selects scissors,
                then the human player wins.
    
                If the human player selects paper and the computer selects rock,
                then the human player wins.

                If the human player selects scissors and the computer selects paper,
                then the human player wins.
            
            Neither the human player or the computer will win if this condition is true:
                If there is a tie between the human player and computer, then no one wins;
                it's a tie.
            
            The computer always wins if these conditions are met:
                If the human player selects rock and the computer selects paper,
                then the computer player wins.
        
                If the human player selects paper and the computer selects scissors,
                then the computer player wins.
        
                If the human player selects scissors and the computer selects rock, 
                then the computer player wins.
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

		// Determine who is the winner of each round and update the score accordingly.
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
