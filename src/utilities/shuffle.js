export default {
  /* eslint-disable no-param-reassign */
  shuffleArray(a) {
    for (let i = a.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },
  /* eslint-enable no-param-reassign */
};
