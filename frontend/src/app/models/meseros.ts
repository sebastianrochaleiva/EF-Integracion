export class Meseros {
    _id?: string = '';
    nombre: string;
    correo: string;
    telefono: string;
    contraseña: string;
    activo?: boolean;

    constructor(nombre: string, correo: string, telefono: string, contraseña: string, activo: boolean) {
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.contraseña = contraseña;
        this.activo = activo;
    }
}