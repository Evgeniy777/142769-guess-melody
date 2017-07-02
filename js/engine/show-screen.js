const screenContainer = document.querySelector(`.app .main`);

export const showScreen = (fragment) => {
  screenContainer.innerHTML = ``;
  screenContainer.appendChild(fragment);
};
