import runGame from '../index.js';
import getRandomInRange from '../utils.js';

const generateProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }

  return progression;
};

const getRandomProgression = () => {
    const length = getRandomInRange(5, 10);
    const start = getRandomInRange(1, 50);
    const step = getRandomInRange(1, 10);
    const progression = generateProgression(start, step, length);

    const hiddenIndex = getRandomInRange(0, length - 1);
    const correctAnswer = String(progression[hiddenIndex]);
    progression[hiddenIndex] = '..';

    return {
      expression: progression.join(' '),
      correctAnswer,
  };
}

export default () => {
  const rules = 'What number is missing in the progression?';
  runGame(rules, getRandomProgression);
};
