export interface Empleado {
  id: number | string,
  tipoId: string,
  nombre:string, 
  apellido:string, 
  fechaExpedicionId:Date,
  fechaNacimiento:Date,
  nacionalidad:string,
  sexo:string,
  estadoCivil:string,
  noCredito:string,
  direccion:string,
  ciudad:string,
  telefono:string,
  correo:string,
  profesion:string,
  primaSeguro:string
}
