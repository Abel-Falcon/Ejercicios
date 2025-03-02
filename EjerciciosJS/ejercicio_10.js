/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

const capicua = (numero) => {
  if (typeof numero !== "number") {
    return "Mandaste algo vacio";
  }
  let positivo = Math.abs(numero);
  let invertir = String(positivo).split("").reverse().join("");
  return invertir === String(positivo);
};

console.log(capicua());

//esta medio mal, no lo copies:::
