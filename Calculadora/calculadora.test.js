const Calculadora = require("./calculadora");

describe("Calculadora", () => {
  test("Deve realizar a soma dos dois valores recebidos", () => {
    const valor1 = 1;
    const valor2 = 2;
    const resultadoEsperado = valor1 + valor2;
    const resultado = Calculadora.soma(valor1, valor2);

    expect(resultado).toBe(resultadoEsperado);
  });

  test("Deve realizar a subtração dos dois valores recebidos", () => {
    const valor1 = 1;
    const valor2 = 2;
    const resultadoEsperado = valor1 - valor2;
    const resultado = Calculadora.subtracao(valor1, valor2);

    expect(resultado).toBe(resultadoEsperado);
  });
});
