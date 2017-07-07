import Results from './results-view';
import application from '../../application';
import {calcStatistics} from '../../engine/calcStatistics';
import {showScreen} from '../../engine/show-screen';
import {getHashObject} from '../../engine/getHash';
import Model from '../../data/model';

export default class ResultsScreen {
  constructor() {

    const params = getHashObject(location.hash);
    this.state = params.state;
    this.model = new Model();
    this.lastGames = params.stats;
  }

  init() {
    this.screen = new Results(this.calcStatistics());

    this.screen.onStartNewGame = () => {
      application.showWelcome();
    };

    this.model.send(this.sendStatistics());
    showScreen(this.screen.element);
  }

  calcStatistics() {
    const state = Object.assign({}, this.state);
    if (state.result === `win`) {
      state.ratio = calcStatistics(state, this.lastGames);
    }
    this.state = state;
    return this.state;
  }

  sendStatistics() {
    return {
      date: new Date().now(),
      time: this.state.time,
      answers: this.state.answers
    };
  }
}
