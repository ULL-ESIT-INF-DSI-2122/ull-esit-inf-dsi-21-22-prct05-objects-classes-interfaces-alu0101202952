import 'mocha';
import {expect} from 'chai';
import {Tablero} from '../../src/ejercicio-2/tablero';


let tablero = new Tablero();


describe('Tablero Conecta 4', () => {
  it('tablero.generarTablero() returns tablero 6*7', () => {
      return expect(tablero.generarTablero()).to.be.eql('Flareon');
  })

});