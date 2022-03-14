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

    setEmail(email: string) {
        this.email = email;
    }

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