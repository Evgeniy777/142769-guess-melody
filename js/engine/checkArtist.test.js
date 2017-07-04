import assert from 'assert';
import {checkArtist} from '../engine/checkArtist';

const testQuestion = [
  {
    image: {
      url: `https://freemusicarchive.org/file/images/artists/Broke_For_Free_-_2013011621055318.jpg?width=300&height=300`,
      width: 300,
      height: 300
    },
    title: `Broke For Free`,
    isCorrect: true
  },
  {
    image: {
      url: `https://freemusicarchive.org/file/images/artists/Broke_For_Free_-_2013011621055318.jpg?width=300&height=300`,
      width: 300,
      height: 300
    },
    title: `Broke For Free`,
    isCorrect: false
  },
  {
    image: {
      url: `https://freemusicarchive.org/file/images/artists/Broke_For_Free_-_2013011621055318.jpg?width=300&height=300`,
      width: 300,
      height: 300
    },
    title: `Broke For Free`,
    isCorrect: false
  }
];

describe(`Guessing artist`, () => {
  it(`is won if right answer is selected`, () => {
    assert(checkArtist(testQuestion, 0), true);
  });

  it(`is lost if wrong answer is selected`, () => {
    assert.notEqual(checkArtist(testQuestion, 2), true);
  });
});
