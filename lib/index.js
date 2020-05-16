#!/usr/bin/env node

const hexOpacity = require('./hexOpacity');
const args = process.argv;

const input = parseInt(args[2]);

try {
  console.log(hexOpacity(input));
} catch (error) {
  console.log(error.message);
}
