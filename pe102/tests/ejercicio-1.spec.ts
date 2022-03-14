import 'mocha';
import {expect} from 'chai';
import {Persona, Estudiante, Profesor, Asignatura} from '../src/ejercicio-1';

let persona = new Persona('Andrea', 'Calero', '08-04-2000', 'Mujer');
let estudiante = new Estudiante('Andrea', 'Calero', '08-04-2000', 'Mujer', 'alu0101202952@ull.edu.es');
let profesor = new Profesor('Juan', 'Glez', '09-04-2000', 'Hombre', 'juan@ull.es');
let asignatura = new Asignatura ('DSI', ['Andrea'], ['Juan']);

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
  it('estudiante.getEmail() returns email del alumno', () => {
      return expect(estudiante.getEmail()).to.be.equal('alu0101202952@ull.edu.es');
  })
});

describe('Profesor', () => {
  it('profesor.getEmailP() returns email del profesor', () => {
      return expect(profesor.getEmailP()).to.be.equal('juan@ull.es');
  })
});

describe('Asignatura', () => {
  it('asignatura.getNombreAsig() returns nombre de la asignatura', () => {
      return expect(asignatura.getNombreAsig()).to.be.equal('DSI');
  })

  it('asignatura.getNombreAlumno() returns nombre de los alumnos de la asignatura', () => {
    return expect(asignatura.getNombreAlumno()).to.be.equal(['Andrea']);
  })
  it('asignatura.getNombreProfesor() returns nombre de los profesores de la asignatura', () => {
    return expect(asignatura.getNombreProfesor()).to.be.equal(['Juan']);
  })
});