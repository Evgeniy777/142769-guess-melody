import assert from 'assert';
import {setScores} from '../engine/setScores';
import {initialState} from '../data/initialState';

describe(`Right answer`, () => {
  // it(`should not change the level of lives`, () => {
  //   assert(false);
  // });
  it(`increases game points by 2 points if it is faster than 10 seconds`, () => {
    const startTime = new Date();
    const newState = Object.assign({}, initialState);
    assert.equal(setScores(startTime, newState), 2);
  });

  it(`increases game points by 1 point if it is slower than 10 seconds`, () => {
    const time = new Date();
    const startTime = new Date(time.getFullYear, time.getMonth(), time.getDate() - 1);
    const newState = Object.assign({}, initialState);
    assert.equal(setScores(startTime, newState), 1);
  });
});

// describe(`Wrong answer`, () => {
//   it(`reduces lives points by 1 point`, () => {
//     assert(false);
//   });
// });
