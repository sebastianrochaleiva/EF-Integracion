export class Login{
    _id?: string;
    correo: string;
    contraseña: string;

    constructor( correo: string, contraseña: string){
        this.correo = correo;
        this.contraseña = contraseña;
    }
}