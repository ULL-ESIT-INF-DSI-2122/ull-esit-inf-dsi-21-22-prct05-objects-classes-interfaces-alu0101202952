import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../../src/ejercicio-1/pokemon';

let pokemon1 = new Pokemon('Flareon', 25, 0.9, 'Fuego', [130, 60, 65, 65]);
//let estudiante = new Estudiante('Andrea', 'Calero', '08-04-2000', 'Mujer', 'alu0101202952@ull.edu.es');
//let profesor = new Profesor('Juan', 'Glez', '09-04-2000', 'Hombre', 'juan@ull.es');
//let asignatura = new Asignatura ('DSI', [estudiante], [profesor]);

describe('Pokemon', () => {
    it('pokemon1.getNombre() returns nombre del pokemon', () => {
        return expect(pokemon1.getNombre()).to.be.equal('Flareon');
    })
/*
    it('persona.getApellidos() returns apellido de la persona', () => {
      return expect(persona.getApellidos()).to.be.equal('Calero');
    })

    it('persona.getFNacimiento() returns apellido de la persona', () => {
      return expect(persona.getFNacimiento()).to.be.equal('08-04-2000');
    })

    it('persona.getGenero() returns apellido de la persona', () => {
      return expect(persona.getGenero()).to.be.equal('Mujer');
    })*/
  
});

/*
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
    return expect(asignatura.getNombreAlumno()).to.be.eql([estudiante]);
  })
  it('asignatura.getNombreProfesor() returns nombre de los profesores de la asignatura', () => {
    return expect(asignatura.getNombreProfesor()).to.be.eql([profesor]);
  })
});*/