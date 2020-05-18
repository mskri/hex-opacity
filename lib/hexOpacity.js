const percentageToHex = (input) => {
  const maxOpacity = 255;

  if (input < 0 || input > 100) {
    throw Error('Percent opacity must be a value between 0 and 100');
  }

  const percentage = 100 / input;
  const opacity = Math.round(maxOpacity / percentage);
  const hexOpacity = opacity.toString(16);

  return padToTwo(hexOpacity).toUpperCase();
};

const hexToPercentage = (input) => {
  const maxOpacity = 255;
  const decimal = parseInt(input, 16);

  if (decimal < 0 || decimal > 255) {
    throw Error('Hex opacity must be a value between 0x00 and 0xFF');
  }

  const percentage = Math.round(decimal / maxOpacity * 100);
  return `${percentage}%`;
};

const padToTwo = (number) => ('0' + number).slice(-2);

module.exports = {
  percentageToHex,
  hexToPercentage
}
