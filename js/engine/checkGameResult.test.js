import assert from 'assert';
import {checkGameResult} from '../engine/checkGameResult';
import {initialState} from '../data/initialState';

describe(`Right answer`, () => {
  it(`should not change the level of lives`, () => {
    const state = Object.assign({}, initialState);
    const gameResult = true;
    const startTime = new Date();
    const newState = checkGameResult(gameResult, state, startTime);
    assert.equal(newState.lives, state.lives);
  });
});

describe(`Wrong answer`, () => {
  it(`reduces lives points by 1 point`, () => {
    const state = Object.assign({}, initialState);
    const gameResult = false;
    const startTime = new Date();
    const newState = checkGameResult(gameResult, state, startTime);
    assert.equal(newState.lives, state.lives - 1);
  });
});
