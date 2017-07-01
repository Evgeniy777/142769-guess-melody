import Results from './results-view';
import Application from '../../application';
import {statistics} from '../../data/statistics';
import {compareStatistics} from '../../engine/compareStatistics';

export default class ResultsScreenController {
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
    const newStatisticItem = {
      time: this.state.time,
      answers: this.state.answers
    };
    statistics.push(newStatisticItem);

    const sortedStatistics = compareStatistics(statistics);
    const index = sortedStatistics.findIndex((statItem) => statItem === newStatisticItem);

    this.state.ratio = ((1 - (index + 1) / sortedStatistics.length) * 100).toFixed(0);
  }
}
