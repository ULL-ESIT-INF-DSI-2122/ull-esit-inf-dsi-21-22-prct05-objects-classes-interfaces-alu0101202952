/**
 * EJERCICIO 4 Comprobar si las cadenas del array están encadenadas o no
 * @param array_cadenas para comprobar
 * @returns la palabra de encadenar los string del array
 */
export function meshArray(array_cadenas: string [] = []) {
    let coincidencia: boolean;
    let posicionCoincidencia: number;
    let resultado: string = '';
    let contadorCoincidencias: number = 0;
  
    for (let j = 0; j < array_cadenas.length - 1; j++) {
        coincidencia = false;
      posicionCoincidencia = 0;
      for (let i = array_cadenas[j].length - 1; i >= 0; i--) {
        if (!coincidencia && array_cadenas[j][i] === array_cadenas[j + 1][0]) {
          posicionCoincidencia = array_cadenas[j].slice(i, array_cadenas[j].length).length;
          coincidencia = true;
        }
      }
      if (coincidencia && array_cadenas[j].substr(-posicionCoincidencia, array_cadenas[2].length) === array_cadenas[j + 1].slice(0, posicionCoincidencia)) {
        resultado += array_cadenas[j].substr(-posicionCoincidencia, array_cadenas[2].length);
        contadorCoincidencias++;
      }
    }
    if (contadorCoincidencias === (array_cadenas.length - 1)) {
      console.log('\n'+resultado);
      return resultado;
    } else {
      console.log('Error al encadenar');
    }
    return resultado;
}

let array_cadenas: string [] = ["allow", "lowering", "ringmaster", "terror"];
console.log('\nLa palabra encadenada resultado del array'+ '['+array_cadenas+']' + ' es:');
meshArray(array_cadenas);