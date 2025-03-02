/* 
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
 */

const mifuncion = (texto = "") => {
  if (!texto.trim()) {
    return "Mandaste algo vacío";
  }

  const limpio = texto.toLowerCase().replace(/[\s,¿?!¡]/g, "");
  const invertido = limpio.split("").reverse().join("");

  return limpio === invertido;
};

console.log(mifuncion("Anita, lava la tina"));
