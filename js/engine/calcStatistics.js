import {compareStatistics} from '../engine/compareStatistics';

export const calcStatistics = (state, statistics) => {
  const newState = Object.assign({}, state);
  const newStatisticItem = {
    time: newState.remainingTime,
    answers: newState.answers
  };
  statistics.push(newStatisticItem);

  const sortedStatistics = compareStatistics(statistics);
  const index = sortedStatistics.findIndex((statItem) => statItem === newStatisticItem);

  newState.ratio = ((1 - (index + 1) / sortedStatistics.length) * 100).toFixed(0);

  return newState.ratio;
};