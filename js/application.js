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
    const presenter = this.routes[hash];

    presenter.init();
  }

  init() {
    this.model.load()
      .then((quests) => {
        // console.log(quests);
        this.initRoutes(quests);
        this.changeController();
      });
  }

  initRoutes(data) {
    this.routes = {
      [ControllerID.WELCOME]: new Welcome(),
      [ControllerID.GAME]: new Game(data),
      [ControllerID.RESULT]: new Result()
    };
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
