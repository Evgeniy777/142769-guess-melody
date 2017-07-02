const screenContainer = document.querySelector(`.app`);

export const showScreen = (screenElement) => {
  screenContainer.innerHTML = ``;
  screenContainer.appendChild(screenElement.element);
};
