/* 
  1) Programa una función que cuete el número de caracteres de una cadena de texto, pe. miFuncion('HolaMundo') devolverá 10
 */

const miFuncion = (recepcionarCadena) => {
  if (typeof recepcionarCadena === "string") {
    return `${recepcionarCadena} tiene ${recepcionarCadena.length} caracteres`;
  }
  if (typeof recepcionarCadena === "number") {
    return `El ${recepcionarCadena} es un número de ${
      recepcionarCadena.toString().length
    } digito`;
  }
  if (Array.isArray(recepcionarCadena)) {
    return `El arreglo tiene ${recepcionarCadena.length} elementos`;
  }

  if (recepcionarCadena === null) {
    return "Ingresaste un valor nulo";
  }
  if (typeof recepcionarCadena === "object") {
    return "Ingresaste un objeto";
  }

  return "ingresaste un valor Indefinido";
};
console.log(miFuncion("Hola Mundo"));

console.log(miFuncion([1, 2, 3, 4, 5]));
