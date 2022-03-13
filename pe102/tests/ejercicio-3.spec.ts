import 'mocha';
import {expect} from 'chai';
import {decodeResistor} from '../src/ejercicio-3';


describe('Se calcula el valor de una resistencia', () => {
    it('decodeResistor("marron, verde") retorna el valor "15"', () => {
      expect(decodeResistor("marron-verde")).to.be.equal('15');
    });
  
});