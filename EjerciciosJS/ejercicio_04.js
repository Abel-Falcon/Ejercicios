/* 
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
 */
const miFuncion = (texto, index) => {
  return `${texto.repeat(index)}`;
};

console.log(miFuncion("Hola Mundo", 3));
