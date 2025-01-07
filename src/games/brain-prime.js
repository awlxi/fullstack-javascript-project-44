#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { runGame } from '../index.js';
import { getRandomInRange } from '../utils.js';

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
        const number = getRandomInRange(1, 100);
        const correctAnswer = isPrime(number) ? 'yes' : 'no';
        return { expression: number, correctAnswer: correctAnswer };
};

export default () => {
        const rules = 'Answer "yes" if the number is prime. Otherwise answer "no".';
        runGame(rules, getExpression);
};
