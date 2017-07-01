import {setScores} from '../engine/setScores';
import {calcStatistics} from '../engine/calcStatistics';
import {statistics} from '../data/statistics';
import {setRemainingTime} from '../engine/setRemainingTime';
import {initialState} from './../data/initialState';

export const checkGameResult = (gameResult, gameState) => {
  const state = Object.assign({}, gameState);

  if (gameResult) {
    state.scores = setScores(state);
    state.answers++;
  } else {
    state.lives--;
  }

  state.questionIndex++;
  state.remainingTime = setRemainingTime(state);
  state.ratio = calcStatistics(state, statistics);
  state.time = initialState.remainingTime - state.remainingTime;

  return state;
};
