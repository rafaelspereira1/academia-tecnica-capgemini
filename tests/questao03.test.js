const anagramas = require("../questao-03");

it("Checa o numero de anagramas baseado no string definido ", () => {
  expect(anagramas("ifailuhkqq")).toBe(3);
});
