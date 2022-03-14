
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
 * PE-102 Clase Asignatura
 * @class Asinatura tiene atributos privados a los que se acceden
 * @param nombre_asignatura de la asignatura
 * @param 
 */
 export class Asignatura {
    constructor(private nombre_asignatura: string, private alumnos: string [] = [],
      private profesores: string [] = []) {
    }

    /**
     * Setter Nombre Asignatura
     * @param nombre_asignatura 
     */
    setNombreAsig(nombre_asignatura: string) {
        this.nombre_asignatura = nombre_asignatura;
    }

    /**
     * Getter Nombre Asignatura
     * @returns nombre_asignatura
     */
    getNombreAsig(){
        return this.nombre_asignatura;
    }

    /**
     * Setter Nombre Alumnos de la asignatura
     * @param nombre_a 
     */
    setNombreAlumno(nombre_a: string) {
        for (let i: number = 0; i < this.alumnos.length; i++) {
            this.alumnos.push(nombre_a);
        }
    }

    /**
     * Getter Nombre Estudiantes
     * @returns nombres estudiantes
     */
    getNombreAlumno(){
        this.alumnos.forEach(element => {
            console.log(element);
        });
        return this.alumnos
    }

    /**
     * Setter Nombre profesores de la asignatura
     * @param nombre_p 
     */
    setNombreProfesor(nombre_p: string) {
        for (let i: number = 0; i < this.profesores.length; i++) {
            this.profesores.push(nombre_p);
        }
    }

    /**
     * Getter Nombre Profesores
     * @returns nombres profesores
     */
    getNombreProfesor(){
        this.profesores.forEach(element => {
            console.log(element);
        });
        return this.profesores
    }

}


/**
 * PE-102 Clase Estudiante hereda de clase Persona
 * @class Estudiante tiene atributos de los alumnos
 * @param nombre del alumno
 * @param apellidos del alumno
 * @param fecha_de_nacimiento del alumno
 * @param genero del alumno
 * @param email del alumno
 */
export class Estudiante extends Persona {
    public email: string;
    constructor(nombre: string, apellidos: string,
      fecha_de_nacimiento: string, genero: string, email: string) {
          super(nombre, apellidos, fecha_de_nacimiento, genero);
          this.email = email;
    }

    /**
     * Setter email estudiante
     * @param email 
     */
    setEmail(email: string) {
        this.email = email;
    }

    /**
     * Getter email estudiante
     * @returns email
     */
    getEmail(){
        return this.email;
    }

}


/**
 * PE-102 Clase Profesor hereda de clase Persona
 * @class Profesor tiene atributos de los profesores
 * @param nombre del profesor
 * @param apellidos del profesor
 * @param fecha_de_nacimiento del profesor
 * @param genero del profesor
 * @param email del profesor
 */
 export class Profesor extends Persona {
    public email: string;
    constructor(nombre: string, apellidos: string,
      fecha_de_nacimiento: string, genero: string, email: string) {
          super(nombre, apellidos, fecha_de_nacimiento, genero);
          this.email = email;
    }

    setEmailP(email: string) {
        this.email = email;
    }

    getEmailP(){
        return this.email;
    }
}

let persona = new Persona('Andrea', 'Calero', '08-04-2000', 'Mujer');
persona.setNombre('Andrea María');
console.log(persona)

let estudiante = new Estudiante('Andrea', 'Calero', '08-04-2000', 'Mujer', 'alu0101202952@ull.edu.es');
estudiante.setNombre('Andrea Luisa');
console.log(estudiante)
estudiante.setEmail('AndreaLuisa@gmail.com');
console.log(estudiante)

let profesor = new Profesor('Juan', 'Glez', '09-04-2000', 'Hombre', 'juan@ull.es');
profesor.setNombre('Juan Lucas');
console.log(profesor)
profesor.setEmailP('JuanLucas@gmail.com');
console.log(profesor)

let asignatura = new Asignatura ('DSI', ['Andrea'], ['Juan']);
asignatura.setNombreAsig('DesarrolloSI');
console.log(asignatura)

asignatura.getNombreAlumno();
console.log(asignatura)

asignatura.getNombreProfesor();
console.log(asignatura)
