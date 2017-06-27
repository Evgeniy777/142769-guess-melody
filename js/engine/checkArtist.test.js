import assert from 'assert';
import {checkArtist} from '../engine/checkArtist';

const testQuestion = {
  type: `guessArtist`,
  srcData: `media/9th_Symphony_Finale_by_Beethoven.mp3`,
  options: [
    {
      id: 1,
      correct: true,
      text: `Пелагея`,
      srcImg: `http://lorempixel.com/400/200`
    },
    {
      id: 2,
      text: `Краснознаменная дивизия имени моей бабушки`,
      srcImg: `http://lorempixel.com/300/200`
    },
    {
      id: 3,
      text: `Lorde`,
      srcImg: `http://lorempixel.com/200/200`
    }
  ]
};

describe(`Guessing artist`, () => {
  it(`is won if right answer is selected`, () => {
    assert(checkArtist(testQuestion, 1), true);
  });

  it(`is lost if wrong answer is selected`, () => {
    assert.notEqual(checkArtist(testQuestion, 2), true);
  });
});
