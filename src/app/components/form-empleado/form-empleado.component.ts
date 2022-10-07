import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Empleado } from '../../models/Empleado';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css'],
})
export class FormEmpleadoComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  empleado: Empleado={
    id: 0,
    tipoId: '',
    nombre: '',
    apellido: '',
    fechaExpedicionId: new Date(),
    fechaNacimiento: new Date(),
    nacionalidad: '',
    sexo: '',
    estadoCivil: '',
    NoCredito: '',
    direccion: '',
    ciudad: '',
    telefono: '',
    correo: '',
    profesion: '',
    primaSeguro: ''
  }


  constructor() {}

  ngOnInit(): void {}

  formSubmit(){
    if (this.empleado.id == 0 || this.empleado.id == null) {
      return null;
    }
    if (this.empleado.tipoId == '' || this.empleado.tipoId == null) {
      return null;
    }
    if (this.empleado.nombre == '' || this.empleado.nombre == null) {
      return null;
    }
    if (this.empleado.apellido == '' || this.empleado.apellido == null) {
      return null;
    }
    if (this.empleado.fechaExpedicionId == null) {
      return null;
    }
    if ( this.empleado.fechaNacimiento == null) {
      return null;
    }
    if (this.empleado.nacionalidad == '' || this.empleado.nacionalidad == null) {
      return null;
    }
    if (this.empleado.sexo == '' || this.empleado.sexo == null) {
      return null;
    }
    if (this.empleado.estadoCivil == '' || this.empleado.estadoCivil == null) {
      return null;
    }
    if (this.empleado.NoCredito == '' || this.empleado.NoCredito == null) {
      return null;
    }
    if (this.empleado.direccion == '' || this.empleado.direccion == null) {
      return null;
    }
    if (this.empleado.ciudad == '' || this.empleado.ciudad == null) {
      return null;
    }
    if (this.empleado.telefono == '' || this.empleado.telefono == null) {
      return null;
    }
    if (this.empleado.correo == '' || this.empleado.correo == null) {
      return null;
    }
    if (this.empleado.profesion == '' || this.empleado.profesion == null) {
      return null;
    }
    if (this.empleado.profesion == '' || this.empleado.profesion == null) {
      return null;
    }
    if (this.empleado.primaSeguro == '' || this.empleado.primaSeguro == null) {
      return null;
    }


return 'hola'


  }



}
