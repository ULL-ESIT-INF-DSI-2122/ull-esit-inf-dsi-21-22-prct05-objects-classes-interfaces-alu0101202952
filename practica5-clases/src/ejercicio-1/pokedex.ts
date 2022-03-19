import { Pokemon } from "./pokemon";

export class Pokedex{
    constructor(private pokemons: Pokemon [] = []) {
    }

    public setPokemons(nombre: Pokemon){
        for (let i: number = 0; i < this.pokemons.length; i++) {
            this.pokemons.push(nombre);
        }
    }

    public getPokemons(){
        this.pokemons.forEach(pokemon => {
            console.log(pokemon);
        });
        return this.pokemons
    }
}

/**
 * Salidas por pantalla
 */
let pokemon1 = new Pokemon('Flareon', 25, 0.9, 'Fuego', [130, 60, 65, 65]);
let pokedex = new Pokedex([pokemon1]);

pokedex.setPokemons(pokemon1);
console.log(pokedex);
pokedex.getPokemons();