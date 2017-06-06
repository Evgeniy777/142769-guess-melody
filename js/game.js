export default {
  screens: {
    welcome: {
      title: `Правила игры`,
      text: `Правила просты&nbsp;— за&nbsp;2 минуты дать максимальное количество правильных ответов.<br> Удачи!`
    },
    levelArtist: {
      title: `Кто исполняет эту песню?`,
      songs: [
        {
          index: 1,
          artist: `Пелагея`,
          img: `http://lorempixel.com/400/200`
        },
        {
          index: 2,
          artist: `Краснознаменная дивизия имени моей бабушки`,
          img: `http://lorempixel.com/300/200`
        },
        {
          index: 3,
          artist: `Lorde`,
          img: `http://lorempixel.com/200/200`
        },
      ],
    },
    levelGenre: {
      title: `Выберите инди-рок треки`,
      answers: [
        {value: 1},
        {value: 2},
        {value: 3},
        {value: 4},
      ],
    },
    resultWin: {
      title: `Вы настоящий меломан!`,
      results: {
        time: 2,
        melodies: 4,
        ratio: 80
      }
    },
    resultFail: {
      title: `Вы проиграли`,
      stat: `Ничего, вам повезет в следующий раз`
    },
  },
  timer: {
    min: `02`,
    sec: `00`
  }
};
