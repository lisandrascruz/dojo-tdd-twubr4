const Calculadora = require("./calculadora");

describe("Calculadora", () => {
  const numero1 = 3;
  const numero2 = 3;

  test("Deve realizar a soma dos dois valores recebidos", () => {
    const resultado = Calculadora.soma(numero1, numero2);

    expect(resultado).toBe(6);
  });

  test("Deve realizar a subtração dos dois valores recebidos", () => {
    const resultado = Calculadora.subtracao(numero1, numero2);

    expect(resultado).toBe(0);
  });

  test("Deve realizar a mutiplicação dos dois valores recebidos", () => {
    const resultado = Calculadora.mutiplicacao(numero1, numero2);

    expect(resultado).toBe(9);
  });

  test("Deve realizar a divisão dos dois valores recebidos", () => {
    const resultado = Calculadora.divisao(numero1, numero2);

    expect(resultado).toBe(1);
  });

  test("Deve realizar o fatorial da soma dos dois valores recebidos", () => {
    const resultado = Calculadora.fatorialDaSoma(numero1, numero2);

    expect(resultado).toBe(720);
  });
});
