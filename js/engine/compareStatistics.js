export const compareStatistics = (array) => {
  const newArray = array.slice();

  newArray.sort((a, b) => {
    return (a.answers - b.answers) ? (b.answers - a.answers) : (a.time - b.time);
  });

  return newArray;
};
