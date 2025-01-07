#!/usr/bin/env node
import runGame from '../index.js';
import getRandomInRange from '../utils.js';

const gcd = (x, y) => {
  let a = x;
  let b = y;
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const getExpression = () => {
  const num1 = getRandomInRange(1, 100);
  const num2 = getRandomInRange(1, 100);
  const expression = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return { expression, correctAnswer };
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  runGame(rules, getExpression);
};
