export interface Persona {
    nombre: string;
    apellidos: string;
    fecha_de_nacimiento: string;
    genero: string;
    /*sides?: number;
    color: string;
    getArea(): number;
    print(): void;*/

}

/**
 * PE-102 Clase Alumno implementa interfaz persona
 * @class Alumno tiene atributos de los alumnos
 * @param nombre del alumno
 * @param apellidos del alumno
 * @param fecha_de_nacimiento del alumno
 * @param genero del alumno
 */
export class Alumno implements Persona {
    constructor(private nombre: string, private apellidos: string,
      private fecha_de_nacimiento: string, private genero: string) {
    }

    setNombre(nombre: string) {
        this.nombre = nombre;
    }

    getNombre(){
        return this.nombre;
    }

}