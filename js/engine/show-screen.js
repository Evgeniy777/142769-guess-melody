const screenContainer = document.querySelector(`.app`);

export const showScreen = (fragment) => {
  screenContainer.innerHTML = ``;
  screenContainer.appendChild(fragment);
};
