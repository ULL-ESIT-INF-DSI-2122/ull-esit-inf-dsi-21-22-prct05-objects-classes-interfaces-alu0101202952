import 'mocha';
import {expect} from 'chai';
import {multiplyAll} from '../src/ejercicio-7';

let array: number [] = [2, 6, 8];

describe('Se devuelve un resultado producto de multiplicar el argumento tipo array por el argumento tipo numérico', () => {
    it('multiplyAll(array)(3)) retorna el valor "[6, 18, 24]"', () => {
      expect(multiplyAll(array)(3)).to.be.eql([6, 18, 24]);
    });
  
});