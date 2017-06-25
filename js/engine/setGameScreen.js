// Функция принимает на вход объект вопроса
// Вызывает функцию с шаблоном нужного типа игры для отрисовки

import mainLevelArtist from '../screens/artist-screen';
import mainLevelGenre from '../screens/genre-screen';
import mainResultWin from '../screens/win-screen';
import mainResultFail from '../screens/fail-screen';
import game from '../data/game';

export const setGameScreen = (question, state) => {
  const newState = Object.assign({}, state);
  let screen;
  if (newState.lives > 0) {
    if (question) {
      const gameType = question.type;
      if (gameType === game.types.guessArtist) {
        screen = mainLevelArtist(question, newState, game);
      } else if (gameType === game.types.guessGenre) {
        screen = mainLevelGenre(question, newState, game);
      }
    } else if (newState.answers > 0) {
      screen = mainResultWin(newState, game);
    } else {
      screen = mainResultFail(newState, game);
    }
  } else {
    screen = mainResultFail(newState, game);
  }
  return screen;
};
