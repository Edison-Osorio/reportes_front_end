import { Empleado } from './Empleado';
export interface Beneficiario{

  id:number,
  nombre:string,
  apellido:string,
  porcentaje:string,
  parentesco:string,
  telefono:string,
  correo:string,
  empleado:Empleado;

}