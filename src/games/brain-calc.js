import runGame from '../index.js';
import getRandomInRange from '../utils.js';

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(Invalid operator - ${operator});
  }
};

const getRandomExpression = () => {
  const operators = ['+', '-', '*'];
  const num1 = getRandomInRange(0, 100);
  const num2 = getRandomInRange(0, 100);
  const operator = operators[getRandomInRange(0, operators.length - 1)];

  const expression = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, operator, num2);

  return { expression, correctAnswer: String(correctAnswer) };
};

export default () => {
  const rules = 'What is the result of the expression?';
  runGame(rules, getRandomExpression);
};
