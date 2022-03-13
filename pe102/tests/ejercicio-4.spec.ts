import 'mocha';
import {expect} from 'chai';
import {meshArray} from '../src/ejercicio-4';


let array1: string [] = ["allow", "lowering", "ringmaster", "terror"]

describe('Comprobar que las palabras del array están encadenadas, una o más', () => {
    it('meshArray(array1) retorna el valor "lowringter"', () => {
      expect(meshArray(array1)).to.be.eql('lowringter');
    });
  
});