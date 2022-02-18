const piramide = require("../questao-01");

it("Deve criar uma pirâmide cortada ao meio", () => {
  expect(piramide()).toHaveLength(30);
});
