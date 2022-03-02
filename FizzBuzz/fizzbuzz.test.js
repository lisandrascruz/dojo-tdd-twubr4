const fizzBuzz = require("./fizzbuzz");

describe("FizzBuzz", () => {
  const multiplo3 = 9;
  const multiplo5 = 20;
  const multiplo3e5 = 30;
  const naoMultiplo = 31;

  test("Retornar 'Fizz' se o número recebido for múltiplo de 3", () => {
    const resultadoEsperado = "Fizz";
    const resultado = fizzBuzz(multiplo3);

    expect(resultado).toBe(resultadoEsperado);
  });

  test("Retornar 'Buzz' se o número recebido for múltiplo de 5", () => {
    const resultadoEsperado = "Buzz";
    const resultado = fizzBuzz(multiplo5);

    expect(resultado).toBe(resultadoEsperado);
  });

  test("Retornar 'FizzBuzz' se o número recebido for múltiplo de 3 e de 5", () => {
    const resultadoEsperado = "FizzBuzz";
    const resultado = fizzBuzz(multiplo3e5);

    expect(resultado).toBe(resultadoEsperado);
  });

  test("Retornar o próprio número recebido se não for múltiplo de ambos", () => {
    const resultadoEsperado = naoMultiplo;
    const resultado = fizzBuzz(naoMultiplo);

    expect(resultado).toBe(resultadoEsperado);
  });
});
