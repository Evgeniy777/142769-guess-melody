import Welcome from './welcome-screen-view';
import application from '../../application';
import {showScreen} from '../../engine/show-screen';

export default class WelcomeController {
  constructor(state) {
    this.state = state;
    this.screen = new Welcome(this.state);
  }

  init() {
    this.screen.onStartGame = application.showGame;

    application.showWelcome();
    showScreen(this.screen.element);

    this.screen.onStartGame = () => {
      application.showGame();
    };
  }
}

