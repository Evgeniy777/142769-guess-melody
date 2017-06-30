export const initialState = Object.freeze({
  remainingTime: 120,
  lives: 3,
  answers: 0,
  scores: 0,
  questionIndex: 0,
  ratio: 0
});

export const setRemainingTime = (gameState, value) => {
  const state = Object.assign({}, gameState);

  if (value > 0) {
    state.remainingTime = value;
  }

  return state;
};
