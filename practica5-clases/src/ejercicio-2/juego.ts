import { Tablero } from "./tablero";

/**
 * EJERCICIO 2. Conecta 4
 * @class Juego, hereda de class Tablero
 * @param tablero tablero
 * @param filas del tablero (6)
 * @param columnas del tablero (7)
 */
export class Juego extends Tablero{
    constructor(private tablero: Tablero, protected filas: number, protected columnas: number){
        super(filas, columnas);
    }

    /**
     * Método público turno para ver columnas llenas
     * @param tablero que se mira
     * @param columna que se comprueba si está llena
     * @returns true si está llena
     * @returns false si está vacía
     */
    public columnaLLena(tablero: Tablero, columna: number){
        const columnaLlena = tablero.getColumnas(columna);
        if(columnaLlena == -1 || columna ==-1) { //La fila está llena se marca un error para rellena  
            console.log('La columna está llena, no se puede introducir ficha');
            return true;
        } else {
            return false;
        }
    }

    
}