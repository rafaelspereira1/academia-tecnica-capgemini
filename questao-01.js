piramide = () => {
  let n = 5; // Altere o valor de N para a quantidade de * desejados
  let string = "";

  for (let i = 1; i <= n; i++) {
    // printa o espaço em branco
    for (let j = 0; j < n - i; j++) {
      string += " ";
    }
    // printa o *
    for (let k = 0; k < i; k++) {
      string += "*";
    }
    string += "\n";
  }
  return string;
};

piramide();
console.log(piramide());

module.exports = piramide;
