import AbstractView from '../../view';
import {animationObject} from '../../animate';

export default class Timer extends AbstractView {
  constructor(state) {
    super();

    this.time = state.remainingTime;
    this.state = state;
  }

  get template() {
    
  }

  

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.initializeCountdown();
    }
    return this._element;
  }
}
