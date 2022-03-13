/**
 * EJERCICIO 7 Se devuelve la multiplicación de los elementos del array por el valor numérico
 * @param array_numeros array con los números a multiplicar (factores)
 * @returns un array con el resultado de multiplicar el array por el valor
 */
export function multiplyAll(array_numeros: number [] = []){
    let resultado_multiplicacion: number[] = [];
    return function(multiplicador: number) {
        array_numeros.forEach(factores => {
            resultado_multiplicacion.push(factores * multiplicador);
        });
        console.log('['+resultado_multiplicacion+']');
        return resultado_multiplicacion;
    };
}

let array: number [] = [2, 6, 8];
let numero: number = 3;
console.log('\nEl resultado de la multiplicación entre el array: '+ '['+array+']' + ' y el número '+numero +' es:');
multiplyAll(array)(numero);