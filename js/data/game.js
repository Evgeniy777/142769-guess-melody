export default {
  rules: {
    title: `Правила игры`,
      text: `Правила просты&nbsp;— за&nbsp;2 минуты дать максимальное количество правильных ответов.<br> Удачи!`
  },
  types: {
    guessArtist: `guessArtist`,
    guessGenre: `guessGenre`
  },
  levels: {
    guessArtist: {
      question: `Кто исполняет это песню?`
    },
    guessGenre: {
      question: `Выберите все песни в жанре`
    }
  },
  result: {
    win: `Вы настоящий меломан!`,
    fail: `Вы проиграли`
  },
  answer: {
    correct: true,
    wrong: false
  },
  timer: {
    min: 2,
    sec: 0
  }
};
