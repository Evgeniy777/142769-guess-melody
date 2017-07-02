const screenContainer = document.querySelector(`.app`);

export const showScreen = (screenElement) => {
  debugger;
  screenContainer.innerHTML = ``;
  screenContainer.appendChild(screenElement.element);
};
