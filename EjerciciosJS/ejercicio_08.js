const miFuncion = (arreglo, buscar) => {
  let ec = new RegExp(buscar, "ig");
  let index = arreglo.match(ec).length;

  for (let i = 0; i < index; i++) {
    arreglo = arreglo.replace(buscar, "");
  }

  return arreglo;
};

console.log(miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));

//Esta mal pero, no vayas a copiar
