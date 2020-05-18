#!/usr/bin/env node

const { hexToPercentage, percentageToHex } = require('./hexOpacity');
const args = process.argv;

if (args[2] === '--hex') {
  const input = args[3]
  getPercentValue(input)
  return
}

if (args[2] === '--percent') {
  const input = args[3]
  getHexValue(input)
  return
}

if (args[2].startsWith('0x')) {
  const input = args[2]
  getPercentValue(input)
  return
}

const input = args[2].replace('%', '')

if (isNumeric(input)) {
  getHexValue(input)
  return
}

console.log('Invalid input. Input must be percentage or hex value')
console.log('Percentage example: 50 or 50%')
console.log('Hex example: 0xFF')

function getHexValue(input) {
  try {
    const inputAsNumber = parseInt(input);
    const hexValue = percentageToHex(inputAsNumber);
    console.log(hexValue);
  } catch (error) {
    console.log(error.message);
  }
}

function getPercentValue(input) {
  try {
    const percentage = hexToPercentage(input)
    console.log(percentage)
  } catch (error) {
    console.log(error.message);
  }
}

function isNumeric(input) {
  return !isNaN(input)
}
