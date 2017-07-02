import Results from './results-view';
import Application from '../../application';
import {statistics} from '../../data/statistics';
import {calcStatistics} from '../../engine/calcStatistics';
import {showScreen} from '../../engine/show-screen';

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
    showScreen(this.screen);
  }

  calcStatistics() {
    this.state.ratio = calcStatistics(this.state, statistics);
  }
}
