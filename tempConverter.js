export function celsiusToTemp(celsius, outTemp) {
  outTemp = outTemp.toUpperCase();
  celsius = parseFloat(celsius);

  if (outTemp[0] === "C") {
    return celsius;
  } else if (outTemp[0] === "F") {
    return (celsius * 9) / 5 + 32;
  } else if (outTemp[0] === "K") {
    return celsius + 273.15;
  }
}

export function tempToCelsius(temp, inTemp) {
  inTemp = inTemp.toUpperCase();
  temp = parseFloat(temp);

  if (inTemp[0] === "C") {
    return temp;
  } else if (inTemp[0] === "F") {
    return ((temp - 32) * 5) / 9;
  } else if (inTemp[0] === "K") {
    return temp - 273.15;
  }
}

export function convertTemp(temp, inTemp, outTemp) {
  const tempCelsius = tempToCelsius(temp, inTemp);
  const tempConverted = celsiusToTemp(tempCelsius, outTemp);

  return tempConverted;
}
