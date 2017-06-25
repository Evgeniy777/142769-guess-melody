//Функция принимает на вход объект вопроса
//Вызывает функцию с шаблоном нужного типа игры для отрисовки

import mainLevelArtist from '../screens/artist-screen';
import mainLevelGenre from '../screens/genre-screen';
import game from '../data/game';

export const setGameScreen = (question) => {
  const gameType = question.type;

  if (gameType == game.types.guessArtist) {
    return mainLevelArtist(question, game);
  } else if (gameType == game.types.guessGenre) {
    return mainLevelGenre(question, game);
  }
};
