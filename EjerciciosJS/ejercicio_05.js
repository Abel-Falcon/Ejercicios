const miFuncion = (texto) => {
  let revertit = texto.split("").reverse().join("");
  return revertit;
};

console.log(miFuncion("Hola mundo"));
