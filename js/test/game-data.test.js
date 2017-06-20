import assert from 'assert';

describe(`Array`, () => {
  describe(`#indexOf()`, () => {
    it(`should return -1 when the value is not present`, () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});

describe(`Game`, () => {
  describe(`Right answer`, () => {
    it(`should not change the level of lives`, () => {
      assert(false);
    });
    it(`increases game points by 2 points if it is faster than 10 seconds`, () => {
      assert(false);
    });
    it(`increases game points by 1 point if it is slower than 10 seconds`, () => {
      assert(false);
    });
  });

  describe(`Wrong answer`, () => {
    it(`reduces lives points by 1 point`, () => {
      assert(false);
    });
  });

  describe(`Game is won`, () => {
    it(`if the number of remaining questions is 0 and the remaining time is greater than or equal to 0`, () => {
      assert(false);
    });
  });

  describe(`Game is lost`, () => {
    it(`if the level of lives is 0`, () => {
      assert(false);
    });

    it(`if the number of remaining questions is greater than 0`, () => {
      assert(false);
    });
  });

  describe(`Guessing genres`, () => {
    it(`is won if all the right answers are selected`, () => {
      assert(false);
    });

    it(`is lost if not all the correct answers are selected`, () => {
      assert(false);
    });

    it(`is lost if one wrong answer is selected`, () => {
      assert(false);
    });
  });

  describe(`Game result`, () => {
    it(`should take the right place in the results statistics`, () => {
      assert(false);
    });
  });

  describe(`Game statistics`, () => {
    it(`should be correctly displayed for 3/5 = 0.6 = 60%`, () => {
      assert(false);
    });
  });
});
