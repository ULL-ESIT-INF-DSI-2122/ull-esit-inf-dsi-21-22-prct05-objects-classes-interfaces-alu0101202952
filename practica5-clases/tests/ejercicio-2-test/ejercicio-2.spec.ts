import 'mocha';
import {expect} from 'chai';
import {Tablero} from '../../src/ejercicio-2/tablero';
//import {Juego} from '../../src/ejercicio-2/juego';

let tablero = new Tablero(6,7);
//let juego = new Juego();

describe('Tablero Conecta 4', () => {
  it('tablero.generarTablero() returns tablero 6*7', () => {
      return expect(tablero.generarTablero()).to.be.eql(undefined);
  })

  it('tablero.getFilas() returns filas', () => {
    return expect(tablero.getFilas()).to.be.equal(6);
  })

  it('tablero.getColumnas() returns columnas', () => {
    return expect(tablero.getColumnas()).to.be.equal(7);
  })
});
/*
describe('Juego Conecta 4', () => {
  it('juego.movimiento() returns se valida si la columna está llena o no', () => {
      return expect(juego.movimiento()).to.be.true;
  })

});*/