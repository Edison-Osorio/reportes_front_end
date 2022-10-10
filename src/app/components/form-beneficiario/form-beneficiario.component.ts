import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Beneficiario } from '../../models/Beneficiario';
import { Empleado } from '../../models/Empleado';
import { EmpleadoService } from '../../services/empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-beneficiario',
  templateUrl: './form-beneficiario.component.html',
  styleUrls: ['./form-beneficiario.component.css'],
})
export class FormBeneficiarioComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  listEmpoye!: Empleado[];

  empleado: Empleado={
    id: '',
    tipoId: '',
    nombre: '',
    apellido: '',
    fechaExpedicionId: new Date,
    fechaNacimiento: new Date,
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
  };

  beneficiario: Beneficiario = {
    id: '',
    nombre: '',
    apellido: '',
    porcentaje: '',
    parentesco: '',
    telefono: '',
    correo: '',
    empleado: this.empleado,
  };

  constructor(private employeService: EmpleadoService) {}

  ngOnInit(): void {
    this.litsEmpoyes();
  }

  litsEmpoyes() {
    this.employeService.listEmploye().subscribe((employe) => {
      this.listEmpoye = employe;
    });
  }

  formSubmit() {
    if (
      this.beneficiario.id == null ||
      this.beneficiario.id == 0 ||
      this.beneficiario.id == ''
    ) {
      return;
    }
    if (this.beneficiario.nombre == null || this.beneficiario.nombre == '') {
      return;
    }
    if (
      this.beneficiario.apellido == null ||
      this.beneficiario.apellido == ''
    ) {
      return;
    }
    if (
      this.beneficiario.porcentaje == null ||
      this.beneficiario.porcentaje == ''
    ) {
      return;
    }
    if (
      this.beneficiario.parentesco == null ||
      this.beneficiario.parentesco == ''
    ) {
      return;
    }
    if (
      this.beneficiario.telefono == null ||
      this.beneficiario.telefono == ''
    ) {
      return;
    }
    if (this.beneficiario.correo == null || this.beneficiario.correo == '') {
      return;
    }
    if (
      this.beneficiario.empleado == null ||
      this.beneficiario.empleado == undefined
    ) {
      return;
    }


     this.beneficiario.empleado = this.empleado

    this.employeService.saveBeneficiario(this.beneficiario).subscribe(
      (res) => {
        Swal.fire(
          'Guardado',
          'Se ha guardado el beneficiario con exito',
          'success'
        );
      },
      (err) => {
        console.log('Este es el error ', err);
        Swal.fire(
          'Error',
          'Ha ocurrido un error al guardar el alumno',
          'error'
        );
      }
    );
  }
}
