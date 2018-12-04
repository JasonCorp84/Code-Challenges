// given a positive float number, write a function called moneyFormat which formats the float into a string
// example: moneyFormat(25.789292929) should return 25.79

function moneyFormat(float) {
  let end = Math.round((float % 1) / 0.01) || '00'; // rounding the float
  if (0 < end && end < 10) end = '0' + end;
  let left = Math.floor(float).toString();
  let str = `${left.slice(-3)}.${end}`;
  left = left.slice(0, -3);

  while (left.length > 3) {
    const nextThree = left.slice(-3);
    str = `${nextThree} ${str}`;
    left = left.slice(0, -3);
  }

  str = `${left} ${str}`;
  return str;
}

// i like this one so much better
function moneyFormat(float) {
  sum = float.toFixed(2).toString();
  return sum;
}

// another option
function moneyFormat(float) {
  let cash = float.toFixed(2);
  let theSplit = cash.split('.');
  let dollars = theSplit[0];
  let change = '.' + theSplit[1];
  let transaction = dollars
    .split('')
    .reverse()
    .join('');
  let saved;
  funds = '';
  for (let i = 0; i < transaction.length; i += 3) {
    saved = transaction.substr(i, 3);
    funds = funcst + '' + saved;
  }
  return (
    funds
      .split('')
      .reverse()
      .join('')
      .trim() + change
  );
}

// another good one
function moneyFormat(float) {
  rounded = parseFloat(float.toFixed(2));
  currency = rounded.toLocaleString(
    'USD',
    { minimumFractionDigits: 2 },
    { maximumFractionDigits: 2 }
  );
  return currency.replace(/\,/g, '');
}

// another one
function moneyFormat(float) {
  let cash = float.toFixed(2);
  let arr = cash.split('');
  let i;
  let j;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == '.') {
      for (j = i - 3; j > 0; j = j - 3) {
        arr.splice(j, 0, '');
      }
      i = arr.length;
    }
  }
  return arr.join('');
}
