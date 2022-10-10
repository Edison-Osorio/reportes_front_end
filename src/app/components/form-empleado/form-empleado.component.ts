import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { Empleado } from '../../models/Empleado';
import { EmpleadoService } from '../../services/empleado.service';

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
    id: '',
    tipoId: '',
    nombre: '',
    apellido: '',
    fechaExpedicionId: new Date(),
    fechaNacimiento: new Date(),
    nacionalidad: '',
    sexo: '',
    estadoCivil: '',
    noCredito: '',
    direccion: '',
    ciudad: '',
    telefono: '',
    correo: '',
    profesion: '',
    primaSeguro: ''
  }


  constructor(private empleadoService:EmpleadoService) {}

  ngOnInit(): void {}

  formSubmit(){
    if (this.empleado.id == 0 || this.empleado.id == null) {
      
      console.log("Hola que mas");
      
      return;
    }
    if (this.empleado.tipoId == '' || this.empleado.tipoId == null) {
      return;
    }
    if (this.empleado.nombre == '' || this.empleado.nombre == null) {
      return;
    }
    if (this.empleado.apellido == '' || this.empleado.apellido == null) {
      return;
    }
    if (this.empleado.fechaExpedicionId == null) {
      return;
    }
    if ( this.empleado.fechaNacimiento == null) {
      return;
    }
    if (this.empleado.nacionalidad == '' || this.empleado.nacionalidad == null) {
      return;
    }
    if (this.empleado.sexo == '' || this.empleado.sexo == null) {
      return;
    }
    if (this.empleado.estadoCivil == '' || this.empleado.estadoCivil == null) {
      return;
    }
    if (this.empleado.noCredito == '' || this.empleado.noCredito == null) {
      return;
    }
    if (this.empleado.direccion == '' || this.empleado.direccion == null) {
      return;
    }
    if (this.empleado.ciudad == '' || this.empleado.ciudad == null) {
      return;
    }
    if (this.empleado.telefono == '' || this.empleado.telefono == null) {
      return;
    }
    if (this.empleado.correo == '' || this.empleado.correo == null) {
      return;
    }
    if (this.empleado.profesion == '' || this.empleado.profesion == null) {
      return;
    }
    if (this.empleado.profesion == '' || this.empleado.profesion == null) {
      return;
    }
    if (this.empleado.primaSeguro == '' || this.empleado.primaSeguro == null) {
      return;
    }

this.empleadoService.saveEmployee(this.empleado).subscribe(
  res=>{
    console.log(res);
    Swal.fire('Guardado','Se guardo el empleado con exito!!','success')
  },
  err=>{
    console.log('este es el erro ', err);
    Swal.fire('Error','Error al guardar el empleado','error')
  }
)

  }



}
