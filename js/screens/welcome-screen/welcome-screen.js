import Welcome from './welcome-screen-view';
import Application from '../../application';
import {initialState} from '../../data/initialState';

class WelcomeController {
  constructor(state) {
    this.state = state;
    this.screen = new Welcome(this.state);
  }

  init() {
    this.showScreen();
    this.screen.onStartGame = Application.showGame;
  }

  showScreen() {
    const app = document.querySelector(`.app`);
    app.replaceChild(this.screen.element, app.querySelector(`.main`));
  }
}

const welcomeController = new WelcomeController(initialState);

export default welcomeController;
