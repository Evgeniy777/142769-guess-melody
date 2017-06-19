export default {
  game: {
    rules: {
      title: `Правила игры`,
      text: `Правила просты&nbsp;— за&nbsp;2 минуты дать максимальное количество правильных ответов.<br> Удачи!`
    },
    types: [
      `guessArtist`,
      `guessSong`
    ],
    result: {
      type: {
        win: `Вы настоящий меломан!`,
        fail: `Вы проиграли`
      },
      time: 2,
      scores: 4,
      ratio: 80
    }
  },
  question: [
    `type`,
    `text`,
    `options`
  ],
  answer: {
    type: {
      correct: true,
      wrong: false
    },
    content: [
      `text`,
      `src`
    ]
  },
  timer: {
    min: 2,
    sec: 0
  }
};

