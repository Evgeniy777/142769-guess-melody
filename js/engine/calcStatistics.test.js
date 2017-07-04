import assert from 'assert';
import {calcStatistics} from '../engine/calcStatistics';

const statistics = [
  {time: 32, answers: 10},
  {time: 44, answers: 10},
  {time: 20, answers: 8},
  {time: 50, answers: 7}
];

describe(`Game statistics`, () => {
  it(`should be correctly displayed for 3/5 = 0.6 = 60%`, () => {
    const state = Object.freeze({
      remainingTime: 120,
      time: 33,
      lives: 3,
      answers: 10,
      scores: 0,
      questionIndex: 0,
      ratio: 0,
      result: ``
    });
    const newState = Object.assign({}, state);
    assert.equal(calcStatistics(newState, statistics), 60);
  });
});
