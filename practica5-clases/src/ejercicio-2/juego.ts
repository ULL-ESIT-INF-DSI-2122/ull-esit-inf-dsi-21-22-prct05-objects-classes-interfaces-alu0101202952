import { Tablero } from "./tablero";

export class Juego extends Tablero{
    constructor(private tablero: Tablero, protected filas: number, protected columnas: number){
        super(filas, columnas);
    }

    public turno(tablero: Tablero, columna: number){
        const columnaLlena = tablero.getColumnas(columna);
        if(columnaLlena == -1 || columna ==-1) { //La fila está llena se marca un error para rellena  
            console.log('La columna está llena, no se puede introducir ficha');
            return true;
        } else {
            return false;
        }
        
    }
}