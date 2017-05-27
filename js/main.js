let templates = document.querySelector(`#templates`);
let templateContent = templates.content;
let screens = [];
let screenWelcome = templateContent.querySelector(`.main--welcome`);
let screenLevelArtist = templateContent.querySelector(`.main--level-artist`);
let screenLevelGenre = templateContent.querySelector(`.main--level-genre`);
let screenResultWin = templateContent.querySelector(`.main--result-win`);
let screenResultFail = templateContent.querySelector(`.main--result-fail`);

screens[0] = screenWelcome;
screens[1] = screenLevelArtist;
screens[2] = screenLevelGenre;
screens[3] = screenResultWin;
screens[4] = screenResultFail;

let activeScreen = 0;

function showScreen(activeScreen) {
  let screenContainer = document.querySelector(`.app .main`);
  screenContainer.innerHTML = ``;
  for (let i = 0; i < screens.length; i++) {
    if(i === activeScreen) {
      screens[i].classList.remove(`screen-hidden`);
      screens[i].classList.add(`screen-active`);
    } else {
      screens[i].classList.add(`screen-hidden`);
      screens[i].classList.remove(`screen-active`);
    }
    screenContainer.appendChild(screens[i]);
  }
}

showScreen(activeScreen);

document.addEventListener(`keydown`, (e) => {
  if (e.altKey && e.keyCode === 37) {
    if (activeScreen > 0) {
      activeScreen--;
    } else {
      activeScreen = screens.length - 1;
    }
    showScreen(activeScreen);
  }
  if (e.altKey && e.keyCode === 39) {
    if (activeScreen < screens.length - 1) {
      activeScreen++;
    } else {
      activeScreen = 0;
    }
    showScreen(activeScreen);
  }
});
