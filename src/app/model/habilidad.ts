export class Habilidad {
    id?: number;
    nombreHys: string;
    porcentaje: number;

    constructor(nombreHys: string, porcentaje: number) {
        this.nombreHys = nombreHys;
        this.porcentaje = porcentaje;
    }
}
