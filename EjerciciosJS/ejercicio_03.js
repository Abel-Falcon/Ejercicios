/* 
 3) Programa una función que dada una String te devuelva un Array de texto separado por cierto caracter, pe miFuncion("Hola que tal", "") devolverá ["Hola", "que", "tal"]
 */

const miFuncion = (texto, caracter) => {
  return texto.split(caracter);
};

console.log(miFuncion("Hola que tal", " "));
