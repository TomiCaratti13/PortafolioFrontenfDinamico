export class Educacion {
    id?: number;
    tituloEdu: string;
    instiEdu: string;
    fechaEdu: string;
    descripcionEdu: string;

    constructor(instiEdu: string, tituloEdu: string, fechaEdu: string, descripcionEdu: string) {
        this.instiEdu = instiEdu;
        this.tituloEdu = tituloEdu;
        this.fechaEdu = fechaEdu;
        this.descripcionEdu = descripcionEdu;
    }
}
