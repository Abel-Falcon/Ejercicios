const miFuncion = (texto, encontrar) => {
  let buscar = new RegExp(encontrar, "ig");
  return `La palabra se repite ${texto.match(buscar).length} veces`;
};

console.log(miFuncion("hola mundo, adios mundo", "mundo"));
