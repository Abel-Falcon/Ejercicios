/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */

const numeroAleatorio = () => {
  const min = 501;
  const max = 600;

  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(numeroAleatorio());
