enum colorResistor {'negro', 'marron', 'rojo', 'naranja', 'amarillo', 'verde', 'azul', 'violeta', 'gris', 'blanco'};

/**
 * EJERCICIO 3 Calcular el valor de una resistencia según los colores definidos previo en un enum
 * @param resistencia string con los colores para los que se calcula
 * @returns valor de la resistencia
 */
export function decodeResistor(resistencia: string) {
    let codigoColores = resistencia.split('-');
    let resultado: string = '';
    if (codigoColores.length >= 2) {
        // Con esto sólo calcula los dos primeros valores de los colores
        codigoColores = codigoColores.slice(0, 2);
        for (let i: number = 1; i < 10; i++) { 
            codigoColores.forEach(color => {
                if (colorResistor[i] === color.toLocaleLowerCase()) {
                    resultado += String(i);
                } else { 
                    resultado += '';
                }
            });
        }
        console.log(resultado);
        return resultado;
    } else {
        console.log('Código de colores de la resistencia erróneo');
    }
    return resultado;
}

let resistencia1: string = 'marron-verde';
let resistencia2: string = 'marron-verde-violeta';

console.log('\nEl valor de la resistencia '+ '"'+resistencia1+'"' + ' es:');
decodeResistor(resistencia1);
console.log('\nEl valor de la resistencia '+ '"'+resistencia2+'"' + ' es:');
decodeResistor(resistencia2);