import 'mocha';
import {expect} from 'chai';
import {addNPoints} from '../src/ejercicio-9';
import {substractNPoints} from '../src/ejercicio-9';
import {productNPoints} from '../src/ejercicio-9';
import {euclideanNPoints} from '../src/ejercicio-9';

type nPoints = [number, number, number,...number[]];

let punto1: nPoints = [1, 1, 2, 2];
let punto2: nPoints = [3, 3, 4, 4];

let resultado_add: nPoints = [4, 4, 6, 6];
let resultado_substract: nPoints = [-2, -2, -2, -2];
let resultado_product_punto2: nPoints = [6, 6, 8, 8];
let resultado_euclidean: number = 4;

describe('Se calcula la suma, resta, multiplicación y distancia euclidea entre dos puntos n-dimensionales', () => {
    it('addNPoints(punto1, punto2) retorna el valor resultado_add', () => {
      expect(addNPoints(punto1, punto2)).to.be.eql(resultado_add);
    });

    it('substractNPoints(punto1, punto2) retorna el valor resultado_substract', () => {
        expect(substractNPoints(punto1, punto2)).to.be.eql(resultado_substract);
    });

    it('productNPoints(punto2, 2) retorna el valor resultado_product_punto2', () => {
        expect(productNPoints(punto2, 2)).to.be.eql(resultado_product_punto2);
    });

    it('euclideanNPoints(punto1, punto2) retorna el valor resultado_euclidean', () => {
        expect(euclideanNPoints(punto1, punto2)).to.be.eql(resultado_euclidean);
    });
});