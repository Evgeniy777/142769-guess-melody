import {initialState} from '../../data/initialState';
import Timer from '../../screens/game/timer-view';
import Application from '../../application';
import LevelArtist from './artist-view';
import GenreArtist from './genre-view';
import gameData from '../../data/game';

export class GameController {
  constructor(state) {
    this.initialState = state;
    this.state = state;
    this.timer = new Timer(this.initialState);
  }

  init() {
    this.showTimer();
  }

  showTimer() {
    const app = document.querySelector(`.app`);
    app.replaceChild(this.timer.element, app.querySelector(`.main`));
  }

  showQuestion() {
    const gameScreen = document.querySelector(`.main--level`);
    gameScreen.replaceChild(this.question.element, document.querySelector(`.main-wrap`));
  }
}

const gameController = new GameController(Object.assign({}, initialState));

export default gameController;
