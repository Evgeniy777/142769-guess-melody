export const setScores = (startTime, state) => {
  const newState = Object.assign({}, state);
  const answerTime = new Date();
  const responseTime = (answerTime - startTime) / 1000;
  if (responseTime < 10) {
    newState.scores += 2;
  } else {
    newState.scores++;
  }
  return newState.scores;
};
