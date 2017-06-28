import {startGuessArtistGame} from './../engine/tools';
import {startGuessGenreGame} from './../engine/tools';
import {endGameWin} from './../engine/tools';
import {endGameFail} from './../engine/tools';
import game from './../data/game';
import {gameQuestions} from './../data/gameQuestions';

export const showGameScreen = (gameState) => {
  const state = Object.assign({}, gameState);
  const questionIndex = state.questionIndex;
  const questionToAsk = gameQuestions[questionIndex];
  const lives = state.lives;

  if (lives > 0) {
    if (questionIndex <= gameQuestions.length - 1) {
      const questionType = questionToAsk.type;
      if (questionType === game.types.guessArtist) {
        startGuessArtistGame(state);
      } else if (questionType === game.types.guessGenre) {
        startGuessGenreGame(state);
      }
    } else {
      endGameWin(state);
    }
  } else {
    endGameFail();
  }
};
