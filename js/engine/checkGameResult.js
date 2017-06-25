export const checkGameResult = (gameResult, gameState) => {
  const state = Object.assign({}, gameState);

  if (gameResult) {
    state.scores++;
  } else {
    state.lives--;
  }

  state.questionIndex++;

  return state;
};
