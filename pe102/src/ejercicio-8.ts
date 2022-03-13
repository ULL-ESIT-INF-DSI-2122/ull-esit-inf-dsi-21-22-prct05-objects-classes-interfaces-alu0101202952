/**
 * EJERCICIO 8 Cálculo de suma, resta, producto y distancia euclídea entre dos puntos bidimensionales
 * @function addPoint suma los puntos, las coordenadas x de un punto con las x de otro y lo mismo con las y
 * @param punto1 punto1 con x e y coordenadas
 * @param punto2 punto2 con x e y coordenadas
 * @returns punto con x e y coordenadas
 */
export function addPoint(punto1: Point, punto2: Point): Point{
    resultado.x = punto1.x + punto2.x;
    resultado.y = punto1.y + punto2.y;
    console.log('['+resultado.x+', '+resultado.y+']');
    return resultado;
}

/**
 * EJERCICIO 8 Cálculo de suma, resta, producto y distancia euclídea entre dos puntos bidimensionales
 * @function substractPoint resta los puntos, las coordenadas x de un punto con las x de otro y lo mismo con las y
 * @param punto1 punto1 con x e y coordenadas
 * @param punto2 punto2 con x e y coordenadas
 * @returns punto con x e y coordenadas
 */
export function substractPoint(punto1: Point, punto2: Point): Point{
    resultado.x = punto1.x - punto2.x;
    resultado.y = punto1.y - punto2.y;
    console.log('['+resultado.x+', '+resultado.y+']');
    return resultado;
}

/**
 * EJERCICIO 8 Cálculo de suma, resta, producto y distancia euclídea entre dos puntos bidimensionales
 * @function productPoint multiplica cada coordenada de un punto (en este caso el @argument punto2 por 2)
 * @param punto2 punto2 con x e y coordenadas
 * @param numero número con el que multiplicar
 * @returns punto con x e y coordenadas
 */
export function productPoint(punto2: Point, numero: number = 2): Point{
    resultado.x = punto2.x * numero;
    resultado.y = punto2.y * numero;
    console.log('['+resultado.x+', '+resultado.y+']');
    return resultado;
}

/**
 * EJERCICIO 8 Cálculo de suma, resta, producto y distancia euclídea entre dos puntos bidimensionales
 * @function euclideanPoint Calcula la distancia euclídea entre dos puntos
 * @param punto1 punto1 con x e y coordenadas
 * @param punto2 punto2 con x e y coordenadas
 * @returns valor de la distancia entre ambos puntos
 */
export function euclideanPoint(punto1: Point, punto2: Point){
    resultado.x = Math.pow(punto2.x - punto1.x, 2);
    resultado.y = Math.pow(punto2.y - punto1.y, 2);
    resultado_euclidean = Math.sqrt(resultado.x + resultado.y)
    console.log(resultado_euclidean);
    return resultado_euclidean;
}

/**
 * Definición de puntos
 */
type Point = {
    x: number,
    y: number,
};

let punto1: Point = {
    x: 1,
    y: 1,
};

let punto2: Point = {
    x: 2,
    y: 3,
};

let resultado: Point = {
    x: 0,
    y: 0,
};

let resultado_euclidean: number = 0;

console.log('\nLa suma de los puntos: ['+punto1.x+', '+punto1.y + '] y el punto ['+punto2.x+', '+punto2.y +'] es:');
addPoint(punto1, punto2);

console.log('\nLa resta de los puntos: ['+punto1.x+', '+punto1.y + '] y el punto ['+punto2.x+', '+punto2.y +'] es:');
substractPoint(punto1, punto2);

console.log('\nEl producto del punto: ['+punto2.x+', '+punto2.y +'] con el número ' +2+' es:');
productPoint(punto2, 2);

console.log('\nLa distancia euclídea entre los puntos: ['+punto1.x+', '+punto1.y + '] y el punto ['+punto2.x+', '+punto2.y +'] es:');
euclideanPoint(punto1, punto2);