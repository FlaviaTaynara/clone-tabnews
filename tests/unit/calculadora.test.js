const calculadora = require("../../models/calculadora");

test("Somar 2 + 2 deve retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("Somar 5 + 100 deve retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("somar 'banana' + 100 deveria retornar 'Error'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Error");
});

test("somar null + 100 deveria retornar 100", () => {
  const resultado = calculadora.somar(null, 100);
  expect(resultado).toBe(100);
});
