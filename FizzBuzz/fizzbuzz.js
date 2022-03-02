const multiploDe3 = (numero) => {
  return numero % 3 === 0;
};

const multiploDe5 = (numero) => {
  return numero % 5 === 0;
};

const fizzBuzz = (numero) => {
  if (multiploDe3(numero) && multiploDe5(numero)) return "FizzBuzz";
  else if (multiploDe3(numero)) return "Fizz";
  else if (multiploDe5(numero)) return "Buzz";

  return numero;
};

module.exports = fizzBuzz;
