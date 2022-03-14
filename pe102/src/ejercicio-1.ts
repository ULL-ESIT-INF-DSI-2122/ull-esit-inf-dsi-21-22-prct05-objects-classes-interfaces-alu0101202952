/*export class Persona {
    nombre: string;
    apellidos: string;
    fecha_de_nacimiento: string;
    genero: string;
    

}*/

/**
 * PE-102 Clase Persona 
 * @class Persona tiene atributos privados a los que se acceden
 * @param nombre del alumno
 * @param apellidos del alumno
 * @param fecha_de_nacimiento del alumno
 * @param genero del alumno 
 */
export class Persona {
    constructor(private nombre: string, private apellidos: string,
      private fecha_de_nacimiento: string, private genero: string) {
    }

    setNombre(nombre: string) {
        this.nombre = nombre;
    }

    getNombre(){
        return this.nombre;
    }

    setApellidos(apellidos: string) {
        this.apellidos = apellidos;
    }

    getApellidos(){
        return this.apellidos;
    }

    setFNacimiento(fecha_de_nacimiento: string) {
        this.fecha_de_nacimiento = fecha_de_nacimiento;
    }

    getFNacimiento(){
        return this.fecha_de_nacimiento;
    }

    setGenero(genero: string) {
        this.genero = genero;
    }

    getGenero(){
        return this.genero;
    }
}

/**
 * PE-102 Clase Alumno implementa interfaz persona
 * @class Alumno tiene atributos de los alumnos
 * @param nombre del alumno
 * @param apellidos del alumno
 * @param fecha_de_nacimiento del alumno
 * @param genero del alumno
 */
export class Estudiante extends Persona {
    constructor(private nombre: string, private apellidos: string,
      private fecha_de_nacimiento: string, private genero: string, private email: string) {
          super(nombre, apellidos, fecha_de_nacimiento, genero);
    }

    setNombreE(nombre: string) {
        this.nombre = nombre;
    }

    getNombreE(){
        return this.nombre;
    }

    setApellidosE(apellidos: string) {
        this.apellidos = apellidos;
    }

    getApellidosE(){
        return this.apellidos;
    }

    setFNacimientoE(fecha_de_nacimiento: string) {
        this.fecha_de_nacimiento = fecha_de_nacimiento;
    }

    getFNacimientoE(){
        return this.fecha_de_nacimiento;
    }
    
}

let persona = new Persona('Andrea', 'Calero', '08-04-2000', 'Mujer');
persona.setNombre('Andrea María');
console.log(persona)

let estudiante = new Estudiante('Andrea', 'Calero', '08-04-2000', 'Mujer', 'alu0101202952@ull.edu.es');
estudiante.setNombreE('Andrea María');
console.log(estudiante)
