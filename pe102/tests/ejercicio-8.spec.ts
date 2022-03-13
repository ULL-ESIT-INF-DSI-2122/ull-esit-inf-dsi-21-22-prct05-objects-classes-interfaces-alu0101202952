import 'mocha';
import {expect} from 'chai';
import {addPoint} from '../src/ejercicio-8';
import {substractPoint} from '../src/ejercicio-8';
import {productPoint} from '../src/ejercicio-8';
import {euclideanPoint} from '../src/ejercicio-8';

type Point = {
    x: number,
    y: number,
};

let punto1: Point = {
    x: 1,
    y: 1,
};

let punto2: Point = {
    x: 2,
    y: 3,
};

let resultado_add: Point = {
    x: 3,
    y: 4,
};

let resultado_substract: Point = {
    x: -1,
    y: -2,
};

let resultado_product_punto2: Point = {
    x: 4,
    y: 6,
};

let resultado_euclidean: number = 2.23606797749979;

describe('Se calcula la suma, resta, multiplicación y distancia euclidea entre dos puntos bidimensionales', () => {
    it('addPoint(punto1, punto2) retorna el valor resultado_add', () => {
      expect(addPoint(punto1, punto2)).to.be.eql(resultado_add);
    });

    it('substractPoint(punto1, punto2) retorna el valor resultado_substract', () => {
        expect(substractPoint(punto1, punto2)).to.be.eql(resultado_substract);
    });
 
    it('productPoint(punto2, 2) retorna el valor resultado_product_punto2', () => {
        expect(productPoint(punto2, 2)).to.be.eql(resultado_product_punto2);
    });

    it('euclideanPoint(punto1, punto2) retorna el valor resultado_euclidean', () => {
        expect(euclideanPoint(punto1, punto2)).to.be.eql(resultado_euclidean);
    });
});