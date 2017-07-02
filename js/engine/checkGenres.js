export const checkGenres = (question, answers) => {
  const correctGenre = question.genre;
  const options = question.options;
  const correctOptions = [];

  options.find((option) => {
    if (option.genre === correctGenre) {
      correctOptions.push(true);
    } else {
      correctOptions.push(false);
    }
  });

  return (correctOptions.join(``) === answers.join(``));
};
