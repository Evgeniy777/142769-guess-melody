export const setScores = (state, time) => {
  const newState = Object.assign({}, state);
  if (time < 10) {
    newState.scores += 2;
  } else {
    newState.scores++;
  }
  return newState.scores;
};
