export const checkArtist = (question, answer) => {
  const correctAnswer = question.options.find((option) => option.correct === true);
  const correctAnswerId = correctAnswer.id;
  const answerId = answer.getAttribute(`id`);
  return answerId === `answer-${correctAnswerId}`;
};
