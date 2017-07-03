import Timer from '../../screens/game/timer-view';
import application from '../../application';
import game from '../../data/game';
import {checkGameResult} from '../../engine/checkGameResult';
import {checkArtist} from '../../engine/checkArtist';
import {checkGenres} from '../../engine/checkGenres';
import LevelArtist from './artist-view';
import LevelGenre from './genre-view';
import {gameQuestions} from '../../data/gameQuestions';
import {initialState} from '../../data/initialState';
import {showScreen} from '../../engine/show-screen';

export default class GameController {
  constructor(state) {
    this.state = initialState;
    this.timer = new Timer(this.state);
    this.gameScreen = null;
  }

  init() {
    this.timer = new Timer(this.state);
    this.initQuestion();
    // this.showTimer();
    this.timer.finishGame = () => {
      debugger;
      this.checkResult();
    };
  }

  showTimer() {
    const timerContainer = document.querySelector(`.main-timer`);
    timerContainer.appendChild(this.timer.element);
  }

  checkResult() {
    const state = Object.assign({}, this.state);
    if (state.answers > 0) {
      state.result = `win`;
    } else {
      state.result = `fail`;
    }
    application.showResult(state);
  }

  showQuestion() {
    showScreen(this.gameScreen.element);
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
    let checkedResult = false;
    if (questionType === game.types.guessArtist) {
      checkedResult = checkArtist(question, answer);
    } else if (questionType === game.types.guessGenre) {
      checkedResult = checkGenres(question, answer);
    }
    return checkedResult;
  }

  showGameScreen() {
    if (this.state.lives > 0 && this.state.remainingTime > 0) {
      if (this.state.questionIndex <= gameQuestions.length - 1) {
        this.initQuestion();
      } else {
        this.checkResult();
      }
    } else {
      this.checkResult();
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
