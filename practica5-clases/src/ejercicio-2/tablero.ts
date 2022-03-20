/**
 * EJERCICIO 2. Conecta 4
 * @class Tablero, tiene la generación del tablero a trabajar
 * @param filas del tablero (6)
 * @param columnas del tablero (7)
 */
export class Tablero{
    constructor (private filas: number, private columnas: number){}

    /**
     * Método público que genera el tablero llenando el array con el espacio reservado de filas y columnas
     */
    public generarTablero(){
        let tablero: number [] = [];
        for (let i: number = 0; i < this.filas; i++) {
            for (let j: number = 0; j < this.columnas; j++) {
                tablero.push(i*j);
            }
        }
    }

    public getFilas(){
        return
    }
}

/**
 * Salida por pantalla
 */
let tablero = new Tablero(6,7);
tablero.generarTablero();
console.log(tablero);