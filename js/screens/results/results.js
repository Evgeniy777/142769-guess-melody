import Results from './results-view';
import application from '../../application';
import {statistics} from '../../data/statistics';
import {calcStatistics} from '../../engine/calcStatistics';
import {showScreen} from '../../engine/show-screen';

export default class ResultsScreen {
  constructor(state) {
    this.state = state;
    this.screen = new Results(this.state);
  }

  init() {
    // this.showScreen();
    // this.screen.onStartNewGame = Application.showWelcome;
    this.calcStatistics();
    showScreen(this.screen.element);

    this.screen.onStartNewGame = () => {
      application.showWelcome();
    };
  }

  showScreen() {
    showScreen(this.screen.element);
  }

  calcStatistics() {
    const state = Object.assign({}, this.state);
    state.ratio = calcStatistics(state, statistics);
  }
}
