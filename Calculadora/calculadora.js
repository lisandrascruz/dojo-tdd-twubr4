class Calculadora {
  static soma(numero1, numero2) {
    return numero1 + numero2;
  }

  static subtracao(numero1, numero2) {
    return numero1 - numero2;
  }

  static mutiplicacao(numero1, numero2) {
    return numero1 * numero2;
  }

  static divisao(numero1, numero2) {
    return numero1 / numero2;
  }

  static fatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 0;
    }

    let resultado = numero;
    for (let i = 1; i < numero; i++) {
      resultado *= numero - i;
    }

    return resultado;
  }

  static fatorialDaSoma(numero1, numero2) {
    const valorDaSoma = this.soma(numero1, numero2);
    const resultado = this.fatorial(valorDaSoma);

    return resultado;
  }
}

module.exports = Calculadora;
