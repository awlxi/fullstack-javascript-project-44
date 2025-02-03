import runGame from '../index.js';
import getRandomInRange from '../utils.js';

const isEven = (number) => number % 2 === 0;

const playGame = () => {
  const number = getRandomInRange(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return { expression: number, correctAnswer };
};

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(rules, playGame);
};
