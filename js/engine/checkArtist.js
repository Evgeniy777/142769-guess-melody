export const checkArtist = (question, answerIndex) => {
  const correctAnswer = question.options.find((option) => option.correct === true);
  const correctAnswerId = correctAnswer.id;
  return correctAnswerId === answerIndex;
};
