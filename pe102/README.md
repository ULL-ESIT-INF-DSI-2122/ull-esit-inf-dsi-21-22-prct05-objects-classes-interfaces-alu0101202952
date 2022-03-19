# Teoría 15 de marzo 2022

## Clases e interfaces genéricas

### CLASES GENÉRICAS

Sintáxis
TIPO <T> genérico.


> ```class FigureCollection<T> {
  constructor(private figures: T[]) {
  }

  addFigure(newFigure: T) {
    this.figures.push(newFigure);
  }

  getNumberOfFigures() {
    return this.figures.length;
  }

  getFigure(index: number) {
    return this.figures[index];
  }

/// SE COMENTA EL MÉTODO PRINT PORQUE NO EXISTE EN LOS TIPOS T
  /* print() {
    this.figures.forEach((figure) => {
      figure.print();
    });
  } */
} 


for (let index = 0; index < myTwoDimensionalFigureCollection.getNumberOfFigures(); index++) {
  myTwoDimensionalFigureCollection.getFigure(index).print();
}```

### RESTRINGIR LOS TIPOS GENÉRICOS

Por ejemplo que la colecciones tenga un print, o solo acepte strings,etc.

1) Indicar que tipo es T, Ejemplo: clase x<T extends Y> {}, SIENDO Y la otra clase o interfaz. Y la clase "Y" tiene el método print
2) Forma explícita EJEMPLO: class x <T extends {print: {} => void}> {}  <- forma más restrictiva


Se pueden tener varios tipos genéricos <T extends Y, U extends Z> SIENDO Y y Z dos clases
EJEMPLO:
> class FigureCollection<T extends TwoDimensionalFigure, U extends ThreeDimensionalFigure> {
  constructor(private figures: (T | U)[]) {
  }...}

Para deshacer una unión de tipos entonces se usa un guardián de tipos (if () {} else {});

### HEREDAR DE CLASES GENÉRICAS

1) Añadir nueva funcionalidad a la subclase (extensión de la superclase)

class FigureCollection<T extends TwoDimensionalFigure | ThreeDimensionalFigure> {
  constructor(protected figures: T[]) {
  }

  addFigure(newFigure: T) {
    this.figures.push(newFigure);
  }

  getNumberOfFigures() {
    return this.figures.length;
  }

  getFigure(index: number) {
    return this.figures[index];
  }

  print() {
    this.figures.forEach((figure) => {
      figure.print();
    });
  }
}

class SearchableFigureCollection<T extends TwoDimensionalFigure | ThreeDimensionalFigure> extends FigureCollection<T> {
  constructor(figures: T[]) {
    super(figures);
  }

  searchByColor(color: ColorType): T[] | undefined {
    return this.figures.filter((figure) => figure.getColor() === color);
  }
}


NOTA = { EL TIPO DE LA SUBCLASE TIENE QUE SER EL MISMO QUE DE LA SUPERCLASE Y LA SUBCLASE HEREDA TODO DEL PADRE}



2) Fijar parámetros de tipo genéricos, la subclase puede no ser un tipo genérico pero si heredar de una superclase de tipo geneérico

3) Restringir parámetros de tipo genérico (intermedio entre el punto 1 y 2). La restrincción de tipo está en la subclase pero la superclase es genérica de tipo T sin indicar más. 


### INTERFACES GENÉRICAS

Sintaxis
> interface CollectionInterface<T> {
    addItem(newItem: T): void;
    getItem(index: number): T;
    getNumberOfItems(): number;
}


### HERENCIA DE INTERFACES GENÉRICAS

Sintaxis

interface CollectionInterface<T> {
  addItem(newItem: T): void;
  getItem(index: number): T;
  getNumberOfItems(): number;
}

interface SearchableCollectionInterface<T extends {name: string}>  /// Explícito donde el tipo T tenga una propiedad name de tipo string,print
  extends CollectionInterface<T> {
  search(name: string): T[] | undefined;
}

interface TwoDimensionalFigureCollectionInterface
  extends CollectionInterface<TwoDimensionalFigure> {
  getSides(): number[];
  getAreas(): number[];
}

interface FigureCollectionInterface<T extends TwoDimensionalFigure |
  ThreeDimensionalFigure> extends CollectionInterface<T> {
  getColors(): ColorType[];
}


## Principios SOLID

Estos principios son unos estándares (5 principios) que todo objeto debe cumplir

Single responsibility principle
Open-closed principle
Liskov substitution principle
Interface segregation principle
Dependency inversion principle



### Single responsibility principle

Una clase debe de ser responsable de una sola responsabilidad. 

class Book {
  constructor(private name: string, private author: string,
    private editorial: string) {
  }
  getName(): string {
    return this.name;
  }
  // More getters and setters
}

class BookCollection {
  constructor(private books: Book[]) {
  }

  searchByName(searchTerm: string): Book[] {
    return this.books.filter((book) => book.getName() === searchTerm);
  }
}


Si quisieramos imprimir, en vez de poner un método print en cada clase, por este principio se debe crear dos clases que impriman la de Book y otra de BookCollection



### Open-closed principle

class Figure {
  constructor(private name: string) {
  }

  getName(): string {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }
}

Si se quiere ampliar la funcionalidad de la clase no se debería modifica esa clase, se debe extender esa clase y la nueva funcionalidad ponerla en la clase extendida.


type ColorType = 'red' | 'yellow' | 'green';

class Figure {
  constructor(protected name: string) {
  }

  getName(): string {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }
}

class FigureWithColorAndDimensions extends Figure {
  constructor(name: string, private color: ColorType,
    private readonly numDim: number) {
    super(name);
  }

  getColor(): ColorType {
    return this.color;
  }
  getNumDim() {
    return this.numDim;
  }
  setColor(color: ColorType) {
    this.color = color;
  }
}

### Liskov substitution principle

Sugiere que una superclase debería poder sustituirse por sus subclases sin afectar al comportamiento general del programa. En otras palabras, si la clase A es una subclase de B, entonces deberíamos poder reemplazar B por A en nuestro código sin que el comportamiento del programa se vea afectado.

class Animal {
  constructor(protected name: string) {
  }
  getName(): string {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }
  makeNoise() {
    console.log(`My name is ${this.name} and I am an animal`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeNoise() {
    console.log(`My name is ${this.name}: bow bow`);
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeNoise() {
    console.log(`My name is ${this.name}: meow meow`);
  }
}

const myAnimals: (Dog|Cat)[] = [new Dog('Balto'), new Cat('Kitty')];

myAnimals.forEach((animal) => {
  animal.makeNoise();
});



### Interface segregation principle

Este para interfaces, mantener las interfaces lo más sencilla posibles.

Hace segregaciones de los métodos en distintas interfaces

interface Printable {
  print(): void;
}

interface Searchable {
  search(searchTerm: string) any[];
}


### Dependency inversion principle

Este es de clases, lo que se intenta es que al declarar un objeto de la clase, es mejor usar las clases más genéricas posibles

interface Individual {
  getDecisionVariables(): unknown[];
}

class NumericIndividual implements Individual {
  constructor(private decisionVariables: number[]) {
  }
  getDecisionVariables() {
    return this.decisionVariables;
  }
}

class BooleanIndividual implements Individual {
  constructor(private decisionVariables: boolean[]) {
  }
  getDecisionVariables() {
    return this.decisionVariables;
  }
}

class EvolutionaryAlgorithm {
  constructor(private population: Individual[]) {  ///usa el tipo genérico de Individual
  }
  runGeneration() {
    this.population.forEach((individual)=> {
      individual.getDecisionVariables();
    });
  }
}
