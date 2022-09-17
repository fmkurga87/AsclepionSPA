import { role } from "./Role";


export interface userRole {
    nombreUsuario: string;
    nombre: string;
    apellido: string;
    sexo: string;
    fechaNacimiento: Date;
    apodo: string;
    fechaCreacion: Date;
    fechaUltimoActivo: Date;
    roles: role[];
}
