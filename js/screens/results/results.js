import Results from './results-view';
import application from '../../application';
import {statistics} from '../../data/statistics';
import {calcStatistics} from '../../engine/calcStatistics';
import {showScreen} from '../../engine/show-screen';
import {getHashObject} from '../../engine/getHash';

export default class ResultsScreen {
  constructor() {
    const params = getHashObject(location.hash);
    this.state = params.state;
  }

  init() {
    this.screen = new Results(this.calcStatistics());

    this.screen.onStartNewGame = () => {
      application.showWelcome();
    };

    showScreen(this.screen.element);
  }

  calcStatistics() {
    const state = Object.assign({}, this.state);
    if (state.result === `win`) {
      state.ratio = calcStatistics(state, statistics);
    }
    this.state = state;
    return this.state;
  }
}
