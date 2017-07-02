import Welcome from './screens/welcome-screen/welcome-screen';
import Game from './screens/game/game';
import Result from './screens/results/results';
import {initialState} from './data/initialState';

const ControllerID = {
  WELCOME: ``,
  GAME: `game`,
  RESULT: `result`
};

const getControllerIDFromHash = (hash) => hash.replace(`#`, ``);

class Application {
  constructor() {
    this.routes = {
      [ControllerID.WELCOME]: Welcome,
      [ControllerID.GAME]: Game,
      [ControllerID.RESULT]: Result
    };

    window.onhashchange = () => {
      this.changeController(getControllerIDFromHash(location.hash));
    };
  }

  changeController(route = ``) {
    const Controller = this.routes[route];
    new Controller(initialState).init();
  }

  init() {
    this.changeController(getControllerIDFromHash(location.hash));
  }

  showWelcome(state) {
    location.hash = ControllerID.WELCOME;
  }

  showGame(state) {
    location.hash = ControllerID.GAME;
  }

  showResult(state) {
    location.hash = ControllerID.RESULT;
  }
}

const application = new Application();

export default application;
