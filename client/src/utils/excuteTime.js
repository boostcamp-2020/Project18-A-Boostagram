const excuteTime = (createdAt) => {
  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;
  const week = day * 7;

  const time = new Date() - new Date(createdAt);

  if (time < min) {
    return `${Math.round(time / sec)}초 전`;
  }

  if (time < hour) {
    return `${Math.round(time / min)}분 전`;
  }

  if (time < day) {
    return `${Math.round(time / hour)}시간 전`;
  }

  if (time < week) {
    return `${Math.round(time / day)}일 전`;
  }
  return `${Math.round(time / week)}주 전`;
};

export default excuteTime;
