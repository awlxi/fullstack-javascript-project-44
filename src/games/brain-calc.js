#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { runGame } from '../index.js';
import { getRandomInRange } from '../utils.js';

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
        const num1 = getRandomInRange(0, 100);
        const num2 = getRandomInRange(0, 100);
        const operator = operators[Math.floor(Math.random() * operators.length)];
        const expression = `${num1} ${operator} ${num2}`;
        const correctAnswer = calculate(num1, operator, num2);

        return { expression, correctAnswer: String(correctAnswer) };
};

export default () => {
        const rules = 'What is the result of the expression?';
        runGame(rules, getRandomExpression);
};
