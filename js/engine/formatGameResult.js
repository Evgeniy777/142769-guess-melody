export const formatGameResult = (seconds, answersCount) => {
  const mins = ~~(seconds / 60);
  const secs = seconds % 60;
  let end = ``;
  let answerEnd = ``;
  const rest = secs % 10;
  const answerRest = answersCount % 10;

  if (rest === 1) {
    end = `у`;
  } else if (rest > 1 && rest < 5) {
    end = `ы`;
  } else {
    end = ``;
  }

  if (answerRest === 1) {
    answerEnd = `ю`;
  } else if (answerRest > 1 && answerRest < 5) {
    answerEnd = `и`;
  } else {
    answerEnd = `й`;
  }

  const secsTemplate = `${secs} секунд`;
  const minsTemplate = (mins !== 0) ? `${mins} минуту ` : ``;
  return `За ${minsTemplate}${secsTemplate}${end}<br>вы&nbsp;отгадали ${answersCount}&nbsp;мелоди${answerEnd}`;
};
