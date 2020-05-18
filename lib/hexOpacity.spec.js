const assert = require('assert').strict;
const { hexToPercentage, percentageToHex } = require('./hexOpacity');

const opacity = {
  '100': 'FF',
  '99': 'FC',
  '98': 'FA',
  '97': 'F7',
  '96': 'F5',
  '95': 'F2',
  '94': 'F0',
  '93': 'ED',
  '92': 'EB',
  '91': 'E8',
  '90': 'E6',
  '89': 'E3',
  '88': 'E0',
  '87': 'DE',
  '86': 'DB',
  '85': 'D9',
  '84': 'D6',
  '83': 'D4',
  '82': 'D1',
  '81': 'CF',
  '80': 'CC',
  '79': 'C9',
  '78': 'C7',
  '77': 'C4',
  '76': 'C2',
  '75': 'BF',
  '74': 'BD',
  '73': 'BA',
  '72': 'B8',
  '71': 'B5',
  '70': 'B3',
  '69': 'B0',
  '68': 'AD',
  '67': 'AB',
  '66': 'A8',
  '65': 'A6',
  '64': 'A3',
  '63': 'A1',
  '62': '9E',
  '61': '9C',
  '60': '99',
  '59': '96',
  '58': '94',
  '57': '91',
  '56': '8F',
  '55': '8C',
  '54': '8A',
  '53': '87',
  '52': '85',
  '51': '82',
  '50': '80',
  '49': '7D',
  '48': '7A',
  '47': '78',
  '46': '75',
  '45': '73',
  '44': '70',
  '43': '6E',
  '42': '6B',
  '41': '69',
  '40': '66',
  '39': '63',
  '38': '61',
  '37': '5E',
  '36': '5C',
  '35': '59',
  '34': '57',
  '33': '54',
  '32': '52',
  '31': '4F',
  '30': '4D',
  '29': '4A',
  '28': '47',
  '27': '45',
  '26': '42',
  '25': '40',
  '24': '3D',
  '23': '3B',
  '22': '38',
  '21': '36',
  '20': '33',
  '19': '30',
  '18': '2E',
  '17': '2B',
  '16': '29',
  '15': '26',
  '14': '24',
  '13': '21',
  '12': '1F',
  '11': '1C',
  '10': '1A',
  '9': '17',
  '8': '14',
  '7': '12',
  '6': '0F',
  '5': '0D',
  '4': '0A',
  '3': '08',
  '2': '05',
  '1': '03',
  '0': '00',
};

Object.entries(opacity).map(([key, value]) => {
  assert.strictEqual(value, percentageToHex(key));
});

console.log('Converting percentage values from 0 to 100 without percentage signs converts to correct opacity hex values');

assert.throws(() => percentageToHex(-1), {
  name: 'Error',
  message: 'Percent opacity must be a value between 0 and 100',
});

console.log('Converting percentage to hex throws error when percent value is lower than 0');

assert.throws(() => percentageToHex(101), {
  name: 'Error',
  message: 'Percent opacity must be a value between 0 and 100',
});

console.log('Converting percentage to hex throws error when percent value is higher than 100');

Object.entries(opacity).map(([key, value]) => {
  const input = parseInt(`${key}%`)
  assert.strictEqual(value, percentageToHex(input));
});

console.log('Converting percentage values from 0% to 100% with percentage signs converts to correct opacity hex values');

Object.entries(opacity).map(([key, value]) => {
  assert.strictEqual(`${key}%`, hexToPercentage(value));
});

console.log('Converting hex values to opacity percentage from 00 to FF converts to correct percentages');

assert.throws(() => hexToPercentage('-0x1'), {
  name: 'Error',
  message: 'Hex opacity must be a value between 0x00 and 0xFF',
});

console.log('Converting hex to percentage throws error when hex value is lower than 0x00');

assert.throws(() => hexToPercentage('0x100'), {
  name: 'Error',
  message: 'Hex opacity must be a value between 0x00 and 0xFF',
});

console.log('Converting hex to percentage throws error when percent value is higher than 0x100');
