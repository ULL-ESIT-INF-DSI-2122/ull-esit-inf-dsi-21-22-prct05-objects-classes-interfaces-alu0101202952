import 'mocha';
import {expect} from 'chai';
import {Persona} from '../src/ejercicio-1';

let persona = new Persona('Andrea', 'Calero', '08-04-2000', 'Mujer');

describe('Persona', () => {
    it('persona.getNombre() returns nombre de la persona', () => {
        return expect(persona.getNombre()).to.be.equal('Andrea');
    })
  
});