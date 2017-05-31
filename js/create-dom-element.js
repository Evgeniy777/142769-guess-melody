/**
 * Created by Cannibal on 31.05.2017.
 */
export const getElementFromTemplate = (template) => {
  const container = document.createElement(`div`);
  container.innerHTML = template;
  return container;
};
