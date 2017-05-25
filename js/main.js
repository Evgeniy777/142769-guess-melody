let templates = document.querySelector(`#templates`);
let templateContent = templates.content;
let screen = templateContent.querySelectorAll(`.main`);
let screens = [];

for (let i = 0; i < screen.length; i++) {
  screens[i] = screen[i];
}

function showScreen(screen) {
  let screenContainer = document.querySelector(`.app .main`);
  screenContainer.innerHTML = ``;
  screenContainer.appendChild(screen);
}

let startPosition = 4;

showScreen(screens[startPosition]);

document.addEventListener(`keydown`, (e) => {
  if (e.altKey && e.keyCode === 37) {
    if (startPosition > 0) {
      startPosition--;
    } else {
      startPosition = screen.length - 1;
    }
  }
  if (e.altKey && e.keyCode === 39) {
    if (startPosition < screen.length - 1) {
      startPosition++;
    } else {
      startPosition = 0;
    }
  }
  showScreen(screens[startPosition]);
  return startPosition;
});
