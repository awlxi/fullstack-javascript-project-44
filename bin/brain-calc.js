#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { runGame } from '../src/index.js';

const calculate = (num1, operator, num2) => {
	switch (operator) {
		case '+':
			return num1 + num2;
		case '-':
			return num1 - num2;
		case '*':
			return num1 * num2;
		default:
			console.log(`Unknown operator: ${operator}`);
			return null;
	}
};

const getRandomExpression = () => {
	const operators = ['+', '-', '*'];
	const num1 = Math.floor(Math.random() * 100);
	const num2 = Math.floor(Math.random() * 100);
	const operator = operators[Math.floor(Math.random() * operators.length)];
	const expression = `${num1} ${operator} ${num2}`;
	const correctAnswer = calculate(num1, operator, num2);

	return { expression, correctAnswer: String(correctAnswer) };
};


const gameLogic = () => {
	console.log('What is the result of the expression?');
	return getRandomExpression();
};

runGame(gameLogic);
