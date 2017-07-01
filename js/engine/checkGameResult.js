import {setScores} from '../engine/setScores';
import {calcStatistics} from '../engine/calcStatistics';
import {statistics} from '../data/statistics';
import {setRemainingTime} from '../engine/setRemainingTime';

export const checkGameResult = (gameResult, gameState) => {
  const state = Object.assign({}, gameState);
  const time = state.remainingTime;

  if (gameResult) {
    state.scores = setScores(state);
    state.answers++;
  } else {
    state.lives--;
  }

  state.questionIndex++;
  state.remainingTime = setRemainingTime(state);
  state.ratio = calcStatistics(state, statistics);

  return state;
};
