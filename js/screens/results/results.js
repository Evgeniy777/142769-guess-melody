import Results from './results-view';
import Application from '../../application';
import {statistics} from '../../data/statistics';
import {calcStatistics} from '../../engine/calcStatistics';

export default class ResultsScreen {
  constructor(state) {
    this.state = state;
    this.screen = new Results(this.state);
  }

  init() {
    this.calcStatistics();
    this.showScreen();
    this.screen.onStartNewGame = Application.showWelcome;
  }

  showScreen() {
    const app = document.querySelector(`.app`);
    app.replaceChild(this.screen.element, app.querySelector(`.main`));
  }

  calcStatistics() {
    this.state.ratio = calcStatistics(this.state, statistics);
  }
}
