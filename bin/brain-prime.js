#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { runGame } from '../src/index.js';

const isPrime = (number) => {
	if (number < 2) return false;
	for (let i = 2; i <= Math.sqrt(number); i += 1) {
		if (number % i === 0) {
			return false;
		}
	}

	return true;
};

const getExpression = () => {
	const number = Math.floor(Math.random() * 100) + 1;
	const correctAnswer = isPrime(number) ? 'yes' : 'no';
	return { expression: number, correctAnswer: correctAnswer };
};

const gameLogic = () => {
	console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
	return getExpression();
};

runGame(gameLogic);
