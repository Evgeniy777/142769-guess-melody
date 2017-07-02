import Welcome from './welcome-screen-view';
import application from '../../application';
import {showScreen} from '../../engine/show-screen';

export default class WelcomeController {
  constructor(state) {
    this.state = state;
    this.screen = new Welcome(this.state);
  }

  init() {
    this.showScreen();
    this.screen.onStartGame = application.showGame;

    console.log(`initWelcome`);
    application.showWelcome();
    showScreen(this.screen.element);

    this.screen.onStartGame = () => {
      application.showGame();
    };
  }

  showScreen() {
    showScreen(this.screen.element);
  }
}

