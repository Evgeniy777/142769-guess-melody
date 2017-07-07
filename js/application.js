import Welcome from './screens/welcome-screen/welcome-screen';
import Game from './screens/game/game';
import Result from './screens/results/results';
import {getHash} from './engine/getHash';
import Model from './data/model';

const ControllerID = {
  WELCOME: ``,
  GAME: `game`,
  RESULT: `result`
};

class Application {
  constructor() {
    this.model = new Model();

    window.onhashchange = () => {
      this.changeController();
    };
  }

  changeController() {
    const hash = getHash(location.hash);
    const Controller = this.routes[hash];
    const presenter = new Controller(this.data);

    presenter.init();
  }

  init() {
    this.model.load()
      .then((quests) => {
        this.initRoutes(quests);
        this.changeController();
      });
  }

  initRoutes(data) {
    this.data = data;
    this.routes = {
      [ControllerID.WELCOME]: Welcome,
      [ControllerID.GAME]: Game,
      [ControllerID.RESULT]: Result
    };
  }

  static showWelcome() {
    location.hash = ControllerID.WELCOME;
  }

  static showGame() {
    location.hash = ControllerID.GAME;
  }

  static showResult(state, stats) {
    const stateObject = JSON.stringify({
      state, stats
    });
    const encode = encodeURIComponent(stateObject);
    location.hash = `${ControllerID.RESULT}=${encode}`;
  }
}

const application = new Application();

export default application;
