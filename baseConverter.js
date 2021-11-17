let digits = "0123456789";
for (let i = 65; i <= 90; i++) {
  digits += String.fromCharCode(i);
}

export function decToBase(decimal, outputBase) {
  if (isNaN(decimal)) {
    throw new Error("Invalid input. Not a number.");
  } else if (outputBase < 2 || outputBase > 36) {
    throw new Error("Invalid base. Less than 2 or greater than 36.");
  } else {
    const positive = Math.abs(decimal) === Number(decimal);
    let dividend = positive ? decimal : Math.abs(decimal);

    const divisor = Number(outputBase);

    let converted = "";
    let remainder;

    while (dividend > 0) {
      remainder = Number(dividend % divisor);

      dividend = Math.floor(dividend / divisor);

      converted = digits[remainder] + converted;
    }

    return positive ? converted : "- " + converted;
  }
}

export function baseToDec(value, valueBase) {
  value = value.toUpperCase();
  valueBase = Number(valueBase);

  if (isNaN(valueBase) || valueBase < 2 || valueBase > 36) {
    throw new Error(
      `Invalid base ${valueBase}. It should be a number between 2 and 36.`
    );
  } else {
    const possibleDigits = digits.slice(0, valueBase);

    const positive = value[0] !== "-";

    let converted = 0;

    for (let digit of value) {
      if (!possibleDigits.includes(digit)) {
        throw new Error(`Invalid value ${value} for base ${valueBase}.`);
      }

      converted *= valueBase;
      converted += possibleDigits.indexOf(digit);
    }

    return positive ? Number(converted) : -Number(converted);
  }
}

export function valueToBase(value, inputBase, outputBase) {
  const decValue = baseToDec(value, inputBase);
  const converted = decToBase(decValue, outputBase);

  return converted;
}
