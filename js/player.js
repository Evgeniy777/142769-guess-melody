import {animationObject} from './animate';
import destroyPlayer from './engine/destroyPlayer';

const updateState = (element, player) => {
  element.querySelector(`.player-status`).style.width =
    `${parseInt(player.currentTime * 100 / player.duration, 10)}%`;
};


const syncState = (player, element) => {
  element.classList.toggle(`player--is-playing`, !player.paused);
};


const switchState = (state, player, element) => {
  if (player.paused) {
    pausePlayers();
    player.play();
    state.stopAnimation = animationObject.animate(
        animationObject.getAnimation(player.currentTime, 1000, player.duration),
        (animation) => updateState(element, player));
  } else {
    player.pause();
    state.stopAnimation();
    state.stopAnimation = null;
  }

  syncState(player, element);
};

const pausePlayers = () => {
  const players = document.querySelectorAll(`audio`);

  Array.from(players, (player) => {
    player.pause();
  });
};

const initializePlayer = (element, file, autoplay = false, controllable = true) => {
  const state = {};

  const content = document.querySelector(`template`)
    .content
    .querySelector(`.player`)
    .cloneNode(true);
  const player = content.querySelector(`audio`);
  const button = content.querySelector(`button`);

  player.onloadeddata = () => {
    if (controllable) {
      button.onclick = (e) => {
        e.preventDefault();
        switchState(state, player, content);
      };
    }

    if (autoplay) {
      switchState(state, player, content);
    }
  };

  player.src = file;
  element.appendChild(content);
  element.classList.toggle(`player--no-controls`, !controllable);

  return () => destroyPlayer(element, state);
};

export default initializePlayer;
