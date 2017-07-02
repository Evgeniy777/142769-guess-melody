import {setScores} from '../engine/setScores';
import {formatTimeObjToSecs} from '../engine/formatTimeObjToSecs';


export const checkGameResult = (gameResult, gameState, startTime, responseTime) => {
  const state = Object.assign({}, gameState);
  const time = formatTimeObjToSecs(startTime) - formatTimeObjToSecs(responseTime);

  if (gameResult) {
    state.scores = setScores(state, time);
    state.answers++;
  } else {
    state.lives--;
  }

  state.questionIndex++;
  state.time += time;

  return state;
};
