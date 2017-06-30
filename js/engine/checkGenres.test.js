import assert from 'assert';
import {checkGenres} from '../engine/checkGenres';

const testQuestion = {
  type: `guessGenre`,
  text: `Выберите рок треки`,
  genre: `rock`,
  options: [
    {
      id: 1,
      dataUrl: `music/9th_Symphony_Finale_by_Beethoven.mp3`,
      genre: `rock`
    },
    {
      id: 2,
      dataUrl: `music/Fur_Elise_by_Beethoven.mp3`,
      genre: `indy`
    },
    {
      id: 3,
      dataUrl: `music/Moonlight_Sonata_by_Beethoven.mp3`,
      genre: `metal`
    },
    {
      id: 4,
      dataUrl: `music/Symphony_No_5_by_Beethoven.mp3`,
      genre: `rock`
    }
  ]
};

describe(`Guessing genres`, () => {
  it(`is won if all the right answers are selected`, () => {
    const testAnswer = [true, false, false, true];
    assert.equal(checkGenres(testAnswer, testQuestion), true);
  });

  it(`is lost if not all the correct answers are selected`, () => {
    const testAnswer = [true, false, true, false];
    assert.notEqual(checkGenres(testAnswer, testQuestion), true);
  });

  it(`is lost if one wrong answer is selected`, () => {
    const testAnswer = [false, false, true, false];
    assert.notEqual(checkGenres(testAnswer, testQuestion), true);
  });
});
