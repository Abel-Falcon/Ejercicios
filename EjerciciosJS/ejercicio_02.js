/* 2) Programa una función que te devuelva el texto recortado según el número de caractares indicados,
  pe. miFuncion("Hola Mundo", 4) devolverá "Hola"
 */

const miFuncion = (texto, final) => {
  return `El texto ${texto} recortado es : ${texto.slice(0, final)}`;
};

console.log(miFuncion("Hola Mundo", 4));
