
export class Tablero{
    constructor (private filas: number, private columnas: number){}

    public generarTablero(){
        let tablero: number [] = [];
        for (let i: number = 0; i < this.filas; i++) {
            for (let j: number = 0; j < this.columnas; j++) {
                tablero.push(i*j);
            }
        }
    }
}

let tablero = new Tablero(6,7);
tablero.generarTablero();
console.log(tablero);