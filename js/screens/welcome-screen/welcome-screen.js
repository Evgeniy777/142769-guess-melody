import Welcome from './welcome-screen-view';
import Application from '../../application';
import {initialState} from '../../data/initialState';
import {showScreen} from '../../engine/show-screen';

class WelcomeController {
  constructor(state) {
    this.state = state;
    this.screen = new Welcome(this.state);
  }

  init() {
    console.log(this.screen.element);
    this.showScreen();
    this.screen.onStartGame = Application.showGame;
  }

  showScreen() {
    showScreen(this.screen);
  }
}

const welcomeController = new WelcomeController(initialState);

export default welcomeController;
