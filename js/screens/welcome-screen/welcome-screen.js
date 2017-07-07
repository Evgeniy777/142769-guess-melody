import Welcome from './welcome-screen-view';
import {showScreen} from '../../engine/show-screen';

export default class WelcomeController {
  constructor(state) {
    this.state = state;
    this.screen = new Welcome(this.state);
  }

  init() {
    this.screen.onStartGame = WelcomeController.showGame;

    WelcomeController.showWelcome();
    showScreen(this.screen.element);

    this.screen.onStartGame = () => {
      WelcomeController.showGame();
    };
  }
}

