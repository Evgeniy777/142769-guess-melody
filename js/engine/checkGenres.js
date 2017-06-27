import game from '../data/game';

export const checkGenres = (answers, question) => {
  const correctGenre = question.genre;
  const options = question.options;
  const correctOptions = [];

  options.find((option) => {
    if (option.genre === correctGenre) {
      correctOptions.push(game.answer.correct);
    } else {
      correctOptions.push(game.answer.wrong);
    }
  });

  return (correctOptions.join(``) === answers.join(``));
};
