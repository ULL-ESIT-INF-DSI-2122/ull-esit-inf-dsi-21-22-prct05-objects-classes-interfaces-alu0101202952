/**
 * EJERCICIO 6 Se devuelve el array con el mismo orden pero los ceros al final
 * @param array_numeros a ordenar
 * @returns el array con los ceros al final
 */
export function moveZeros(array_numeros: number [] = []) {
    for (let i: number = 0; i < array_numeros.length; i++) {
        if (array_numeros[i] == 0) {
            array_numeros.splice(i,1);
            array_numeros.push(0);
        }
    }
    console.log('['+array_numeros+']');
    return array_numeros;
}

let array: number [] = [1, 0, 1, 2, 0, 1, 3];
console.log('\nEl nuevo array, de ceros al final de '+ '['+array+']' + ' es:')
moveZeros(array);