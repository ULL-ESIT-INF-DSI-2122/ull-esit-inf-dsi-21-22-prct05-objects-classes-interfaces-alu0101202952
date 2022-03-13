import 'mocha';
import {expect} from 'chai';
import {rideCartesia} from '../src/ejercicio-10';


let array1: string [] = ['n', 'e', 's', 's', 's', 's', 'o', 'n', 'n', 'n'];
let array2: string [] = ['n', 'e', 's', 's', 's', 's', 'o', 'n', 's', 's'];

describe('Se devuelve true si el paseo dura exactamente 10 minutos y además nos devuelve al mismo punto inicial sobre el cual se empezó', () => {
    it('rideCartesia(array1) retorna el valor true', () => {
      expect(rideCartesia(array1)).to.be.true;
    });

    it('rideCartesia(array2) retorna el valor false, porque vuelve dos pasos hacia atrás y por tanto acaba en distinto lugar al inicial', () => {
        expect(rideCartesia(array2)).to.be.false;
    });
  
});