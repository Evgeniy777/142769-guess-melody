export const checkGenres = (question, answers) => {
  const correctGenre = question.genre;
  const correctOptions = [];

  question.answers.find((answer) => {
    if (answer.genre === correctGenre) {
      correctOptions.push(true);
    } else {
      correctOptions.push(false);
    }
  });

  return (correctOptions.join(``) === answers.join(``));
};
