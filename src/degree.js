export const getSeconds = (count) => {
  if (Math.sign(count) === -1) {
    if (count <= -1 && count > -5) {
      return 0.9;
    } else if (count <= -5 && count > -10) {
      return 0.6;
    } else if (count <= -10) {
      return 0.4;
    }
  }
  return count;
};
