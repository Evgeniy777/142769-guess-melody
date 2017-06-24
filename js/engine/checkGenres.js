import game from '../data/game';

export const checkGenres = (question) => {
  const inputs = document.querySelectorAll(`.genre-answer [name="answer"]`);
  const correctGenre = question.genre;
  const options = question.options;
  const correctOptions = [];
  const checkedAnswers = [];

  options.find((option) => {
    if(option.genre == correctGenre) {
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

  const gameResult = (correctOptions.join(``) == checkedAnswers.join(``));
  return gameResult;
};
