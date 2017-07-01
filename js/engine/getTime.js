export const getTime = (state) => {
  const newState = Object.assign({}, state);
  const minutes = parseInt(document.querySelector(`.timer-value-mins`).textContent, 10);
  const seconds = parseInt(document.querySelector(`.timer-value-secs`).textContent, 10);
  newState.remainingTime = minutes * 60 + seconds;
  return newState.remainingTime;
};
