/**
 * Created by Cannibal on 31.05.2017.
 */
export const showScreen = (screenElement) => {
  let screenContainer = document.querySelector(`.app .main`);
  screenContainer.innerHTML = screenElement.outerHTML;
};
