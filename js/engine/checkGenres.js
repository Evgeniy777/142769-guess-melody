import game from '../data/game';

export const checkGenres = (inputs, question) => {
  const correctGenre = question.genre;
  const options = question.options;
  const correctOptions = [];
  const checkedAnswers = [];

  options.find((option) => {
    if (option.genre === correctGenre) {
      correctOptions.push(game.answer.correct);
    } else {
      correctOptions.push(game.answer.wrong);
    }
  });

  inputs.forEach((input) => {
    if (input.checked) {
      checkedAnswers.push(game.answer.correct);
    } else {
      checkedAnswers.push(game.answer.wrong);
    }
  });

  return (correctOptions.join(``) === checkedAnswers.join(``));
};
