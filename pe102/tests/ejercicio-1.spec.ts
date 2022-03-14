import 'mocha';
import {expect} from 'chai';
import {Persona} from '../src/ejercicio-1';

let persona = new Persona('Andrea', 'Calero', '08-04-2000', 'Mujer');

describe('Persona', () => {
    it('persona.getNombre() returns nombre de la persona', () => {
        return expect(persona.getNombre()).to.be.equal('Andrea');
    })

    it('persona.getApellidos() returns apellido de la persona', () => {
      return expect(persona.getApellidos()).to.be.equal('Calero');
    })

    it('persona.getFNacimiento() returns apellido de la persona', () => {
      return expect(persona.getFNacimiento()).to.be.equal('08-04-2000');
    })

    it('persona.getGenero() returns apellido de la persona', () => {
      return expect(persona.getGenero()).to.be.equal('Mujer');
    })
  
});