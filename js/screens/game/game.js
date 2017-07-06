import Timer from '../../screens/game/timer-view';
import application from '../../application';
import game from '../../data/game';
import {checkGameResult} from '../../engine/checkGameResult';
import {checkArtist} from '../../engine/checkArtist';
import {checkGenres} from '../../engine/checkGenres';
import LevelArtist from './artist-view';
import LevelGenre from './genre-view';
import {initialState} from '../../data/initialState';
import {showScreen} from '../../engine/show-screen';

export default class GameController {
  constructor(questions) {
    this.state = initialState;
    this.timer = new Timer(this.state);
    this.gameScreen = null;
    this.questions = questions;
  }

  init() {
    this.timer.resetTimer();
    this.timer = new Timer(this.state);
    this.showTimer();
    this.initQuestion();
    this.timer.finishGame = () => {
      this.timer.resetTimer();
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
    this.timer.resetTimer();
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
      const players = document.querySelectorAll(`audio`);
      [...players].forEach((player) => {
        player.pause();
      });
      const responseTime = this.timer.getTime();
      this.state = checkGameResult(this.checkAnswer(questionType, answer), this.state, startTime, responseTime);
      this.showGameScreen();
    };
  }

  checkAnswer(questionType, answer) {
    const question = this.setQuestion();
    let checkedResult;
    if (questionType === game.types.guessArtist) {
      checkedResult = checkArtist(question.answers, answer);
    } else if (questionType === game.types.guessGenre) {
      checkedResult = checkGenres(question, answer);
    }
    return checkedResult;
  }

  showGameScreen() {
    if (this.state.lives > 0 && (this.state.questionIndex <= this.questions.quests.length - 1)) {
      this.initQuestion();
    } else {
      this.checkResult();
    }
  }

  setQuestion() {
    return this.questions.quests[this.state.questionIndex];
  }

  getNextGameScreen() {
    const questionType = this.setQuestion().type;

    const games = {
      artist: LevelArtist,
      genre: LevelGenre
    };

    this.gameScreen = new games[questionType](this.state, this.questions);

    return this.gameScreen;
  }
}
