/**
 * EJERCICIO 5 Se debe devolver la media de los valores numéricos del array y la cadena resultado de concatenar los caracteres del array mixto
 * @param array_mixto es un array de caracteres alfa-numéricos
 * @returns la media y la cadena
 */
export function meanAndConcatenate(array_mixto: any[]) {
    let media: number = 0;
    let cadena_resultado: string = '';
    let suma_contador: number = 0;

    let abecedario: RegExp = /^[a-zA-Z]$/
    let numeros: RegExp = /^[0-9]{9}$/

    for (let i: number = 0; i < 1; i++) {
        for (let j: number = 0; j < array_mixto.length; j++) {
            if (abecedario.test(String(array_mixto[j]))) {
                cadena_resultado += array_mixto[j];
            } else {
                media += array_mixto[j];
                suma_contador++;
            }
        }
    }
    media = media / suma_contador;
    console.log('['+media+', '+cadena_resultado+']');
    return [media, cadena_resultado];
}

let array: any[] = ['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0];
console.log('\nEl resultado del array: '+ '"'+array+'"' + ' es:')
meanAndConcatenate(array);