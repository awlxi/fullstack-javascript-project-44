#!/usr/bin/env node
import { runGame } from '../src/index.js';

const gcd = (num1, num2) => {
	while (num2) {
		[num1, num2] = [num2, num1 % num2];
	}

	return num1;
}

const getExpression = () => {
	const num1 = Math.floor(Math.random() * 100);
	const num2 = Math.floor(Math.random() * 100);
	const expression = `${num1} ${num2}`;
	const correctAnswer = String(gcd(num1, num2));
	return { expression, correctAnswer };
};

const gameLogic = () => {
        console.log('Find the greatest common divisor of given numbers.');
        return getExpression();
};

runGame(gameLogic);
