import {Personas} from "./personas";

export interface Curso{
  nombreCurso: string,
  comision: string,
  profesor: string;
  fechaInicio: Date,
  fechaFin: Date,
  inscripcionABierta: boolean,
  alumnos: Personas[],

}
