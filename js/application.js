import welcomeController from './screens/welcome-screen/welcome-screen';
import game from './screens/game/game';
// import statsScreen from './screen/stats-screen';

export default class Application {

  static showWelcome() {
    welcomeController.init();
  }

  static showGame() {
    game.init();
  }

  static showStats(state) {
    // statsScreen.init();
  }

}
