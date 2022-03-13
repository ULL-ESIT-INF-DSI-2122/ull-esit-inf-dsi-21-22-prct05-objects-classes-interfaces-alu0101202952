import 'mocha';
import {expect} from 'chai';
import {moveZeros} from '../src/ejercicio-6';


let array1: number [] = [1, 0, 1, 2, 0, 1, 3]

describe('Se devuelve el array con el mismo orden, salvo los ceros que irán al final', () => {
    it('moveZeros(array1) retorna el valor "[1, 1, 2, 1, 3, 0, 0]"', () => {
      expect(moveZeros(array1)).to.be.eql([1, 1, 2, 1, 3, 0, 0]);
    });
  
});