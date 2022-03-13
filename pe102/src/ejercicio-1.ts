/**
 * EJERCICIO 1: Devolver un array de arrays con n tablas de multiplicas donde cada tabla de multiplicar contiene los primeros n productos de valores
 * @param n numero de parametros de las tablas
 * @returns array de arrays con n tablas de multiplicar
 */
export function productTable(n: number){
    let resultado: number [] = [];
    let tabla: number [][] = [];
    for (let i: number = 1; i <= n; i++) {
        for (let j: number = 1; j <= n; j++) {
            resultado.push(i*j);
        }
        tabla.push(resultado);
        resultado = [];
    }
    console.log(tabla);
    return tabla;
    
}

let n: number = 3;
let n1: number = 4;
console.log('\nTabla de n = '+ n+' es: ');
productTable(n);
console.log('\nTabla de n = '+ n1+' es: ');
productTable(n1);
