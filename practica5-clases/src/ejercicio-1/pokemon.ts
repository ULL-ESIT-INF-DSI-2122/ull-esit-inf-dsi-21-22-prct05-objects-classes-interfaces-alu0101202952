/**
 * EJERCICIO 1.
 * @class Pokemon, tiene las especificaciones correspondientes a los pokemon
 * @param nombre tiene el nombre del pokemon (string)
 * @param peso tiene el peso del pokemon, Kg (number)
 * @param altura tiene la altura del pokemon, m (number)
 * @param tipo tiene el tipo de pokemon (string)
 * @param estadisticas tiene un array del ataque, defensa, velocidad y daño máximo del pokemon (number [])
 */
export class Pokemon {
    protected estadisticas = {
        ataque: 0,
        defensa: 0, 
        velocidad: 0,
        hp: 0,
    }

    constructor(protected nombre: string, protected peso: number,
      protected altura: number, protected tipo: string, estadisticas: number []) {
        this.estadisticas.ataque = estadisticas[0];
        this.estadisticas.defensa = estadisticas[1];
        this.estadisticas.velocidad = estadisticas[2];
        this.estadisticas.hp = estadisticas[3];
    }
    
    /**
     * Setter nombre del pokemon
     * @param nombre del pokemon
     */
    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    /**
     * Getter del nombre del pokemon
     * @returns nombre del pokemon
     */
    public getNombre(){
        return this.nombre;
    }

    /**
     * Setter peso del pokemon
     * @param peso del pokemon
     */
    public setPeso(peso: number) {
        this.peso = peso;
    }

    /**
     * Getter del peso del pokemon
     * @returns peso del pokemon
     */
    public getPeso(){
        return this.peso;
    }

    /**
     * Setter altura del pokemon
     * @param altura del pokemon
     */
    public setAltura(altura: number) {
        this.altura = altura;
    }

    /**
     * Getter de la altura del pokemon
     * @returns altura del pokemon
     */
    public getAltura(){
        return this.altura;
    }

     /**
     * Setter tipo del pokemon
     * @param tipo del pokemon
     */
    public setTipo(tipo: string) {
        this.tipo = tipo;
    }

    /**
     * Getter del tipo del pokemon
     * @returns tipo del pokemon
     */
    public getTipo(){
        return this.tipo;
    }

}


/**
 * Salidas por pantalla
 */
let pokemon1 = new Pokemon('Flareon', 25, 0.9, 'Fuego', [130, 60, 65, 65]);
console.log(pokemon1);
pokemon1.setNombre('Flareon (Eeveevolución)');
console.log(pokemon1);
pokemon1.getNombre();

pokemon1.setPeso(27);
console.log(pokemon1);
pokemon1.getPeso();

pokemon1.setAltura(0.7);
console.log(pokemon1);
pokemon1.getAltura();

pokemon1.setTipo('Fuego(llama)');
console.log(pokemon1);
pokemon1.getTipo();