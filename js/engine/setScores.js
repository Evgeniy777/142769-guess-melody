import {getTime} from './../engine/getTime';

export const setScores = (state) => {
  const newState = Object.assign({}, state);
  const responseTime = state.remainingTime - getTime();
  if (responseTime < 10) {
    newState.scores += 2;
  } else {
    newState.scores++;
  }
  return newState.scores;
};
