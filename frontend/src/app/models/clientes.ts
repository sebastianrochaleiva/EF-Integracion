export class Clientes {
    _id?: string = '';
    nombre: string;
    correo: string;
    telefono: string;
    dni: string;


    constructor(nombre: string, correo: string, telefono: string, dni: string) {
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.dni = dni;
    }
}