import welcomeController from './screens/welcome-screen/welcome-screen';
import game from './screens/game/game';
import ResultsScreen from './screens/results/results';

export default class Application {

  static showWelcome() {
    debugger;
    welcomeController.init();
  }

  static showGame() {
    game.init();
  }

  static showStats(state) {
    const resultsScreen = new ResultsScreen(state);
    resultsScreen.init();
  }

}
