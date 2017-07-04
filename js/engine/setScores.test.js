import assert from 'assert';
import {setScores} from '../engine/setScores';
import {initialState} from '../data/initialState';

describe(`Right answer`, () => {
  it(`increases game points by 2 points if it is faster than 10 seconds`, () => {
    const time = 9;
    const newState = Object.assign({}, initialState);
    assert.equal(setScores(newState, time), 2);
  });

  it(`increases game points by 1 point if it is slower than 10 seconds`, () => {
    const time = 11;
    const newState = Object.assign({}, initialState);
    assert.equal(setScores(newState, time), 1);
  });
});
