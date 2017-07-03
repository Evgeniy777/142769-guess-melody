import Welcome from './screens/welcome-screen/welcome-screen';
import Game from './screens/game/game';
import Result from './screens/results/results';
import {getHash} from './engine/getHash';

const ControllerID = {
  WELCOME: ``,
  GAME: `game`,
  RESULT: `result`
};

class Application {
  constructor() {
    this.routes = {
      [ControllerID.WELCOME]: Welcome,
      [ControllerID.GAME]: Game,
      [ControllerID.RESULT]: Result
    };

    window.onhashchange = () => {
      this.changeController();
    };
  }

  changeController() {
    const hash = getHash(location.hash);
    const presenter = new this.routes[hash]();

    presenter.init();
  }

  init() {
    this.changeController();
  }

  showWelcome() {
    location.hash = ControllerID.WELCOME;
  }

  showGame() {
    location.hash = ControllerID.GAME;
  }

  showResult(state) {
    const stateObject = JSON.stringify({
      state
    });
    const encode = encodeURIComponent(stateObject);
    location.hash = `${ControllerID.RESULT}=${encode}`;
  }
}

const application = new Application();

export default application;
