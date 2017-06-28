// import {setScores} from '../engine/setScores';
import {calcStatistics} from '../engine/calcStatistics';
import {statistics} from '../data/statistics';

export const checkGameResult = (gameResult, gameState) => {
  const state = Object.assign({}, gameState);

  if (gameResult) {
    state.answers++;
  } else {
    state.lives--;
  }

  state.questionIndex++;
  state.ratio = calcStatistics(state, statistics);

  return state;
};
