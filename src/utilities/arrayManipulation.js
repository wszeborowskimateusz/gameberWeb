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
  findLongestStringLength(array) {
    return array.reduce((a, b) => (a.length > b.length ? a : b), '').length;
  },
  removeStringFromArray(array, string) {
    for (let i = array.length - 1; i >= 0; i -= 1) {
      if (array[i] === string) array.splice(i, 1);
    }
  },
};
