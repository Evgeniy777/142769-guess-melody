let templates = document.querySelector(`#templates`);
let templateContent = templates.content;
let screens = [];
let screenWelcome = templateContent.querySelectorAll(`.main--welcome`);
let screenLevel = templateContent.querySelectorAll(`.main--level`);
let screenResult = templateContent.querySelectorAll(`.main--result`);

function addingScreenToArray(element) {
  for (let i = 0; i < element.length; i++) {
    screens.push(element[i]);
  }
}

addingScreenToArray(screenWelcome);
addingScreenToArray(screenLevel);
addingScreenToArray(screenResult);

let activeScreen = 0;

function showScreen(screenElement) {
  let screenContainer = document.querySelector(`.app .main`);
  let element = screenElement;
  screenContainer.innerHTML = ``;
  screenContainer.appendChild(element);
}

showScreen(screens[activeScreen]);

document.addEventListener(`keydown`, (e) => {
  if (e.altKey && e.keyCode === 37) {
    if (activeScreen > 0) {
      activeScreen--;
    } else {
      activeScreen = screens.length - 1;
    }
    showScreen(screens[activeScreen]);
  }
  if (e.altKey && e.keyCode === 39) {
    if (activeScreen < screens.length - 1) {
      activeScreen++;
    } else {
      activeScreen = 0;
    }
    showScreen(screens[activeScreen]);
  }
});
