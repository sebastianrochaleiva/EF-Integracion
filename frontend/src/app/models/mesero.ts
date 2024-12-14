export class Login{
    _id?: string;
    correo: string;
    contraseña: string;

    constructor( correo: string, contraseña: string){
        this.correo = correo;
        this.contraseña = contraseña;
    }
}

/*
export class Login{
    _id?: string;
    nombre: string;
    correo: string;
    telefono: string;
    contraseña: string;
    activo: boolean;
    //email: string;

    constructor( nombre: string, correo: string, telefono: string, contraseña: string, activo: boolean){
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.contraseña = contraseña;
        this.activo = activo;
    }

    cns( nombre: string, contraseña: string){
        this.nombre = nombre;
        this.contraseña = contraseña;
    }
}
*/