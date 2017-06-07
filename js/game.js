export default {
  game: {
    rules: {
      title: `Правила игры`,
      text: `Правила просты&nbsp;— за&nbsp;2 минуты дать максимальное количество правильных ответов.<br> Удачи!`
    },
    types: [
      'guessArtist',
      'guessSong'
    ],
    questions: [
      {
        type: 'guessArtist',
        text: `Кто исполняет эту песню?`,
        options: [
          {
            artist: `Пелагея`,
            src: `http://lorempixel.com/400/200`
          },
          {
            artist: `Краснознаменная дивизия имени моей бабушки`,
            src: `http://lorempixel.com/300/200`
          },
          {
            artist: `Lorde`,
            src: `http://lorempixel.com/200/200`
          }
        ]
      },
      {
        type: 'guessSong',
        text: `Выберите инди-рок треки`,
        options: [
          {value: 1},
          {value: 2},
          {value: 3},
          {value: 4}
        ]
      }
    ],
    result: {
      type: {
        win: `Вы настоящий меломан!`,
        fail: `Вы проиграли`
      },
      time: 2,
      melodies: 4,
      ratio: 80
    }
  },
  question: [
    'type',
    'text',
    'options'
  ],
  answer: {
    type: {
      correct: true,
      wrong: false
    },
    content: [
      'text',
      'src'
    ]
  },
  timer: {
    min: `02`,
    sec: `00`
  }
};

