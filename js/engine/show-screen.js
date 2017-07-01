const screenContainer = document.querySelector(`.app .main`);

export const showScreen = (screenElement) => {
  screenContainer.innerHTML = ``;
  screenContainer.appendChild(screenElement.element);
};
