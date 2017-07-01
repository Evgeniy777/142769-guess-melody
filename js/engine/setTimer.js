import timer from './../screens/timer/timer';

export const setTimer = (state) => {
  const timerContainer = document.querySelector(`.main-timer`);
  timer(state, timerContainer);
};
