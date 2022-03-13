/**
 * EJERCICIO 2 Se comprime por rangos los valores numericos
 * @param array array de numeros enteros
 */
export function fromArrayToRanges(array: number [] = []) {
    let aux: number [] = [];
    for (let i: number = 0; i < array.length-1; i++) {
        if (array[i] == array[i+1]-1) {
            //aux = array.splice(i,1);
            //console.log(aux);
            console.log(array[i], array[i+1]);
            console.log('consecutivo');
        } else {
            console.log(array[i], array[i+1]);
            console.log('NO consecutivo');
        }
    }
}

let array: number [] = [5, 6, 7, 9, 12, 13, 14];
console.log('\nEl array = ['+ array+'] es: ');
fromArrayToRanges(array);