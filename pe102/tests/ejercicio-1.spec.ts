import 'mocha';
import {expect} from 'chai';
import {Persona, Estudiante} from '../src/ejercicio-1';

let persona = new Persona('Andrea', 'Calero', '08-04-2000', 'Mujer');
let estudiante = new Estudiante('Andrea', 'Calero', '08-04-2000', 'Mujer', 'alu0101202952@ull.edu.es');

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


describe('Estudiante', () => {
  it('estudiante.getNombreE() returns nombre del alumno', () => {
      return expect(estudiante.getNombreE()).to.be.equal('Andrea');
  })

  it('estudiante.getApellidosE() returns apellido del estudiante', () => {
    return expect(estudiante.getApellidosE()).to.be.equal('Calero');
  })

  it('estudiante.getFNacimientoE() returns apellido del estudiante', () => {
    return expect(estudiante.getFNacimientoE()).to.be.equal('08-04-2000');
  })
/*
  it('persona.getGenero() returns apellido de la persona', () => {
    return expect(persona.getGenero()).to.be.equal('Mujer');
  })
*/
});