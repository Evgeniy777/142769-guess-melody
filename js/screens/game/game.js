import {initialState} from '../../data/initialState';
import Timer from '../../screens/game/timer-view';
import Application from '../../application';
import game from '../../data/game';
import {checkGameResult} from '../../engine/checkGameResult';
import {checkArtist} from '../../engine/checkArtist';
import {checkGenres} from '../../engine/checkGenres';
import LevelArtist from './artist-view';
import LevelGenre from './genre-view';
import {gameQuestions} from '../../data/gameQuestions';
import {showScreen} from '../../engine/show-screen';

export class GameController {
  constructor(state) {
    this.initialState = state;
    this.state = state;
    this.timer = new Timer(this.initialState);
    this.gameScreen = null;
  }

  init() {
    this.initQuestion();
  }

  showTimer() {
    const timerContainer = document.querySelector(`.main-timer`);
    timerContainer.appendChild(this.timer.element);
  }

  showQuestion() {
    showScreen(this.gameScreen);
  }

  initQuestion() {
    const startTime = this.timer.getTime();
    this.getNextGameScreen();
    this.showQuestion();
    this.gameScreen.onAnswer = (questionType, answer) => {
      const responseTime = this.timer.getTime();
      this.state = checkGameResult(this.checkAnswer(questionType, answer), this.state, startTime, responseTime);
      this.showGameScreen();
    };
  }

  checkAnswer(questionType, answer) {
    const question = this.setQuestion();
    if (questionType === game.types.guessArtist) {
      return checkArtist(question, answer);
    } else if (questionType === game.types.guessGenre) {
      return checkGenres(question, answer);
    }
  }

  showGameScreen() {
    if (this.state.lives > 0 && this.state.remainingTime > 0) {
      if (this.state.questionIndex <= gameQuestions.length - 1) {
        this.initQuestion();
      } else {
        if (this.state.answers > 0) {
          this.state.result = `win`;
        } else {
          this.state.result = `fail`;
        }
        Application.showStats(this.state);
      }
    } else {
      if (this.state.answers > 0) {
        this.state.result = `win`;
      } else {
        this.state.result = `fail`;
      }
      Application.showStats(this.state);
    }
  }

  setQuestion() {
    return gameQuestions[this.state.questionIndex];
  }

  getNextGameScreen() {
    const questionType = this.setQuestion().type;

    const games = {
      guessArtist: LevelArtist,
      guessGenre: LevelGenre
    };

    this.gameScreen = new games[questionType](this.state);

    return this.gameScreen;
  }
}

const gameController = new GameController(Object.assign({}, initialState));

export default gameController;
