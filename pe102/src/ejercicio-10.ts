/**
 * EJERCICIO 10: Comprobar que se puede hacer un recorrido en exactamente 10 minutos, y volver al punto de partida
 * @param array_ride movimientos que se realiza 'n' -> norte, 's'-> sur, 'e' -> este, 'o'-> oeste
 * @returns true si se vuelve al mismo punto inicial
 * @returns false si NO se vuelve al mismo punto inicial
 */
export function rideCartesia(array_ride: string [] = []) {
    for (let i: number = 0; i < array_ride.length; i++) {
        // Se recorre el espacio del tablero
        for (let j: number = 0; j < 10; j++) {
            for (let k: number = 0; k < 10; k++) {
                if (array_ride[i] == 'n') {
                    movimiento.y = movimiento.y + 1;
                } else if (array_ride[i] == 's') {
                    movimiento.y = movimiento.y - 1;
                } else if (array_ride[i] == 'e') {
                    movimiento.x = movimiento.x + 1;
                } else { // 'o'
                    movimiento.x = movimiento.x - 1;
                }
            }
        }
        //console.log(movimiento);
    }
    if (movimiento.x == punto_inicial.x && movimiento.y == punto_inicial.y) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
    console.log(array_ride);
    console.log(movimiento);
}

/**
 * Declaración de tipos y variables
 */
type Point = {
    x: number,
    y: number,
};

/*
let tablero: Point = {
    x: 10,
    y: 10,
};*/

let punto_inicial: Point = {
    x: 1,
    y: 2,
};

let movimiento: Point = {
    x: 1,
    y: 2,
};

/**
 * Salida por pantalla
 */
let array1: string [] = ['n', 'e', 's', 's', 's', 's', 'o', 'n', 'n', 'n'];
console.log('\nPunto inicial: ['+punto_inicial.x+', '+punto_inicial.y + ']');
console.log('\nPunto que se mueve (empieza en el mismo punto inicial): ['+movimiento.x+', '+movimiento.y + ']');
console.log('\nArray que se pasa: ['+array1+']');
console.log('\n¿Se empieza y acaba en el mismo lugar?');
rideCartesia(array1);

let array2: string [] = ['n', 'e', 's', 's', 's', 's', 'o', 'n', 's', 's'];
console.log('\nPunto inicial: ['+punto_inicial.x+', '+punto_inicial.y + ']');
console.log('\nPunto que se mueve (empieza en el mismo punto inicial): ['+movimiento.x+', '+movimiento.y + ']');
console.log('\nArray que se pasa: ['+array2+']');
console.log('\n¿Se empieza y acaba en el mismo lugar?');
rideCartesia(array2);

