#!/usr/bin/env node
import { runGame } from '../index.js';
import { getRandomInRange } from '../utils.js';

const generateProgression = (length) => {
  const progression = [];
  const randomValue = getRandomInRange(1, 50);
  const randomStep = getRandomInRange(1, 10);

  for ( let i = 0; i < length; i += 1) {
    const nextProgressionNumber = randomValue + i * randomStep;
    progression.push(nextProgressionNumber);
  }

  return progression;
};

const getExpression = () => {
  const length = getRandomInRange(5, 10);
  const progression = generateProgression(length);
  const hiddenIndex = getRandomInRange(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';

  const expression = progression.join(' ');

  return { expression, correctAnswer };
};

export default () => {
  const rules = 'What number is missing in the progression?';
  runGame(rules, getExpression);
};
