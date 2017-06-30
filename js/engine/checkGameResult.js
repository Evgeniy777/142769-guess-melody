import {setScores} from '../engine/setScores';

export const checkGameResult = (gameResult, gameState, startTime) => {
  const state = Object.assign({}, gameState);

  if (gameResult) {
    state.scores = setScores(startTime, state);
    state.answers++;
  } else {
    state.lives--;
  }

  state.questionIndex++;

  return state;
};
