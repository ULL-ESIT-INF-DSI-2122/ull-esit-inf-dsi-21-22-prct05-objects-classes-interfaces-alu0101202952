import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../../src/ejercicio-1/pokemon';

let pokemon1 = new Pokemon('Flareon', 25, 0.9, 'Fuego', [130, 60, 65, 65]);

describe('Pokemon', () => {
    it('pokemon1.getNombre() returns nombre del pokemon', () => {
        return expect(pokemon1.getNombre()).to.be.equal('Flareon');
    })

    it('pokemon1.getPeso() returns peso del pokemon', () => {
      return expect(pokemon1.getPeso()).to.be.equal(25);
    })

    it('pokemon1.getAltura() returns altura del pokemon', () => {
      return expect(pokemon1.getAltura()).to.be.equal(0.9);
    })

    it('pokemon1.getTipo() returns tipo del pokemon', () => {
      return expect(pokemon1.getTipo()).to.be.equal('Fuego');
    })

    it('pokemon1.getEstadisticas() returns estadísticas del pokemon', () => {
      return expect(pokemon1.getEstadisticas()).to.be.equal([130, 60, 65, 65]);
    })
  
});