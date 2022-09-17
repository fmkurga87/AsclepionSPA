import { healthCenter } from "./healthCenter";
import { obraSocial } from "./obraSocial";
import { specialty } from "./specialty";

export interface medic {
    especialidades: specialty[];
    centrosDeSalud: healthCenter[];
    obrasSociales: obraSocial[];
    id: number;
    legajo: number;
    nombre: string;
    apellido: string;
    photoUrl: string;
}


