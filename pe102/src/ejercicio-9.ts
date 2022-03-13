/**
 * EJERCICIO 9: Cálculo de suma, resta, producto y distancia euclídea entre dos puntos n-dimensionales
 * @function addNPoints suma los puntos, las coordenadas 1...i de un punto con las 1...i de otro
 * @param punto1 punto1 con 1...i coordenadas
 * @param punto2 punto2 con 1...i coordenadas
 * @returns punto resultado de la suma con 1...i coordenadas
 */
export function addNPoints(punto1: nPoints, punto2: nPoints): nPoints{
    let resultado_add: nPoints = [0, 0, 0, 0];
    if (punto1.length == punto2.length) {
        for (let i: number = 0; i < punto1.length; i++) {
            resultado_add[i] = punto1[i] + punto2[i];
        }
    } else {
        console.log('Error de puntos');
    }
    console.log('La suma que resulta es: ['+resultado_add+']');
    return resultado_add;
}

/**
 * EJERCICIO 9: Cálculo de suma, resta, producto y distancia euclídea entre dos puntos n-dimensionales
 * @function substractNPoints resta los puntos, las coordenadas 1...i de un punto con las 1...i de otro
 * @param punto1 punto1 con 1...i coordenadas
 * @param punto2 punto2 con 1...i coordenadas
 * @returns punto resultado de la resta con 1...i coordenadas
 */
export function substractNPoints(punto1: nPoints, punto2: nPoints): nPoints{
    let resultado_substract: nPoints = [0, 0, 0, 0];
    if (punto1.length == punto2.length) {
        for (let i: number = 0; i < punto1.length; i++) {
            resultado_substract[i] = punto1[i] - punto2[i];
        }
    } else {
        console.log('Error de puntos');
    }
    console.log('La resta que resulta es: ['+resultado_substract+']');
    return resultado_substract;
}

/**
 * EJERCICIO 9: Cálculo de suma, resta, producto y distancia euclídea entre dos puntos n-dimensionales
 * @function productNPoints producto del punto (punto2) con coordenadas 1...i por un numero (2 en este caso)
 * @param punto2 punto2 con 1...i coordenadas
 * @param numero numero por el que se multiplica
 * @returns punto resultado del producto con 1...i coordenadas
 */
export function productNPoints(punto2: nPoints, numero: number = 2): nPoints{
    let resultado_product_punto2: nPoints = [0, 0, 0, 0];
    for (let i: number = 0; i < punto2.length; i++) {
        resultado_product_punto2[i] = punto2[i] * numero;
    }
    console.log('El producto que resulta es: ['+resultado_product_punto2+']');
    return resultado_product_punto2;
}

/**
 * EJERCICIO 9: Cálculo de suma, resta, producto y distancia euclídea entre dos puntos n-dimensionales
 * @function euclideanNPoints distancia euclídea entre los puntos (punto1 y punto2) las coordenadas 1...i de un punto con las 1...i de otro
 * @param punto1 punto1 con 1...i coordenadas
 * @param punto2 punto2 con 1...i coordenadas
 * @returns valor de la distancia entre ambos puntos.
 */
export function euclideanNPoints(punto1: nPoints, punto2: nPoints) {
    let resultado_euclidean: number = 0;
    if (punto1.length == punto2.length) {
        for (let i: number = 0; i < punto1.length; i++) {
            resultado_euclidean += Math.pow(punto2[i] - punto1[i], 2);
        }
    } else {
        console.log('Error de puntos');
    }
    resultado_euclidean = Math.sqrt(resultado_euclidean);
    console.log('La distancia euclídea que resulta es: '+resultado_euclidean);
    return resultado_euclidean;
}

/**
 * Definición de puntos
 */
type nPoints = [number, number, number,...number[]];

let punto1: nPoints = [1, 1, 2, 2];
let punto2: nPoints = [3, 3, 4, 4];

console.log('\nLa suma de los puntos: ['+punto1+'] y el punto ['+punto2+'] es:');
addNPoints(punto1, punto2);

console.log('\nLa resta de los puntos: ['+punto1+'] y el punto ['+punto2+'] es:');
substractNPoints(punto1, punto2);

console.log('\nEl producto del punto: ['+punto2+'] y el número 2 es:');
productNPoints(punto2, 2);

console.log('\nLa distancia euclídea entre los puntos: ['+punto1+'] y el punto ['+punto2+'] es:');
euclideanNPoints(punto1, punto2);