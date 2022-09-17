import { obraSocial } from './obraSocial';

export interface turno {
    id: number;
    paciente: string;
    telefono: string;
    obraSocial: string;
    centroDeSalud: string;
    dia: Date;
    hora: string;
    confirmado: boolean;
    atendido: boolean;
}
