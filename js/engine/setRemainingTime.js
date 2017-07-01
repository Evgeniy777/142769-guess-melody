import {getTime} from './../engine/getTime';

export const setRemainingTime = (gameState) => {
  const state = Object.assign({}, gameState);
  state.remainingTime = getTime();

  return state.remainingTime;
};
