#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { runGame } from '../src/index.js';

const generateProgression = (length) => {
	const progression = [];
	const randomValue = Math.floor(Math.random() * 100);
	const randomStep = Math.floor(Math.random() * 10) + 1;

	for ( let i = 0; i < length; i += 1) {
		const nextProgressionNumber = randomValue + i * randomStep;
		progression.push(nextProgressionNumber);
	}

	return progression;
}

const getExpression = () => {
	const minLength = 5;
	const maxLength = 10;
	const progressionLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

	const progression = generateProgression(progressionLength);
	const index = Math.floor(Math.random() * progressionLength);
	const correctAnswer = String(progression[index]);
	progression[index] = '..';

	const expression = progression.join(' ');

	return { expression, correctAnswer };
};

const gameLogic = () => {
	console.log('What number is missing in the progression?');
	return getExpression();
};

runGame(gameLogic);
