const testaSenha = require("../questao-03");

it("Deve testar se a senha tem no minimo 6 caracteres", () => {
  expect(testaSenha()).toBe(true);
});
