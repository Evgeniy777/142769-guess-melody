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
    guessArtist: {
      text: `Кто исполняет эту песню?`,
      srcData: `someFileHere`,
      options: [
        {
          id: 1,
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
    },
    guessSong: {
      text: `Выберите инди-рок треки`,
      options: [
        {
          id: 1,
          dataUrl: `http://lorempixel.com/400/200`
        },
        {
          id: 2,
          dataUrl: `http://lorempixel.com/300/200`
        },
        {
          id: 3,
          dataUrl: `http://lorempixel.com/200/200`
        },
        {
          id: 4,
          dataUrl: `http://lorempixel.com/100/200`
        }
      ]
    },
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

