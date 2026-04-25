function somar(numero1, numero2) {
  if (numero1 === null) {
    return numero2;
  } else if (numero2 === null) {
    return numero1;
  } else if (typeof numero1 !== "number") {
    return "Error";
  } else if (typeof numero2 !== "number") {
    return "Error";
  }
  return numero1 + numero2;
}

exports.somar = somar;
