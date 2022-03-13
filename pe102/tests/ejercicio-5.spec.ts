import 'mocha';
import {expect} from 'chai';
import {meanAndConcatenate} from '../src/ejercicio-5';


let array1 = ['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0]

describe('Devuelve un array con dos valores, la media de los valores numéricos y la cadena resultado de concatenar los valores caracteres', () => {
    it('meanAndConcatenate(array1) retorna el valor "[3.6, "udiwstagwo"]"', () => {
      expect(meanAndConcatenate(array1)).to.be.eql([3.6, "udiwstagwo"]);
    });
  
});