import readlineSync from 'readline-sync';

const roundsCount = 3;

export const runGame = (gameLogic) => {
	console.log('Welcome to the Brain Games!');
	const name = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${name}!`);

	for (let i = 0; i < roundsCount; i++) {
		const { expression, correctAnswer } = gameLogic();
		console.log(`Question: ${expression}`);

		const userAnswer = readlineSync.question('Your answer: ');

		if (userAnswer !== correctAnswer) {
			console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
			console.log(`Let's try again, ${name}!`);
			return;
		}

		console.log('Correct!');
	}

	console.log(`Congratulations, ${name}!`);
};
