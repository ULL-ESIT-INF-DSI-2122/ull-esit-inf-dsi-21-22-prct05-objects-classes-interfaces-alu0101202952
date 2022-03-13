import 'mocha';
import {expect} from 'chai';
import {productTable} from '../src/ejercicio-1';

let array1 = [[1, 2, 3], [2, 4, 6], [3, 6, 9]];
let array2 = [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]];

describe('Devuelve un arra de arrays con n (valor que se pasa) tablas de multiplicar', () => {
    it('productTable(3) retorna el valor array1', () => {
      expect(productTable(3)).to.be.eql(array1);
    });
  
    it('productTable(4) retorna el valor array2', () => {
      expect(productTable(4)).to.be.eql(array2);
    });
});