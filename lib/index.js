#!/usr/bin/env node

const { percentageToHex } = require('./hexOpacity');
const args = process.argv;

const input = parseInt(args[2]);

try {
  console.log(percentageToHex(input));
} catch (error) {
  console.log(error.message);
}
