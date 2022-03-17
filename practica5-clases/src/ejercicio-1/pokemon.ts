
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
    
    setNombre(nombre: string) {
        this.nombre = nombre;
    }


    getNombre(){
        return this.nombre;
    }

}


/**
 * Salidas por pantalla
 */
let pokemon1 = new Pokemon('Flareon', 25, 0.9, 'Fuego', [130, 60, 65, 65]);
pokemon1.setNombre('Flareon (Eeveevolución)');
console.log(pokemon1);

pokemon1.getNombre();
