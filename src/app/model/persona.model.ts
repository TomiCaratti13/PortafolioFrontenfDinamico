export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    imgPerfil: string;
    imgBanner: string;

    constructor(nombre: string, apellido: string, descripcion: string, imgPerfil: string, imgBanner: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.imgPerfil = imgPerfil;
        this.imgBanner = imgBanner;
    }
}
