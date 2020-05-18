const percentageToHex = (input) => {
  const minOpacity = 0;
  const maxOpacity = 255;

  if (input < 0 || input > 100) {
    throw Error('Opacity must be a value between 0 and 100');
  }

  const percentage = 100 / input;
  const opacity = Math.round(maxOpacity / percentage);
  const hexOpacity = opacity.toString(16);

  return padToTwo(hexOpacity).toUpperCase();
};

const padToTwo = (number) => ('0' + number).slice(-2);

module.exports = {
  percentageToHex
}
