import 'mocha';
import {expect} from 'chai';
import {fromArrayToRanges} from '../src/ejercicio-2';

let array1: number [] = [5, 6, 7, 9, 12, 13, 14];

describe('Se decuelve una comprensión de rangos al pasarle un array', () => {
    it('fromArrayToRanges(array1) retorna el valor "5_7, 9, 12_14"', () => {
      expect(fromArrayToRanges(array1)).to.be.equal("5_7, 9, 12_14");
    });
  
});