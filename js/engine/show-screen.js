export const showScreen = (screenElement) => {
  let screenContainer = document.querySelector(`.app .main`);
  screenContainer.innerHTML = ``;
  screenContainer.appendChild(screenElement);
};
