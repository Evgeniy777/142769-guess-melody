export const formatSecondsToTime = (seconds) => {
  const mins = ~~(seconds / 60);
  const secs = seconds % 60;
  let end = ``;
  const rest = secs % 10;

  if (rest === 1) {
    end = `у`;
  } else if (rest > 1 && rest < 5) {
    end = `ы`;
  } else {
    end = ``;
  }

  const secsTemplate = `${secs} секунд`;
  const minsTemplate = (mins !== 0) ? `${mins} минуту ` : ``;
  return `${minsTemplate}${secsTemplate}${end}`;
};
