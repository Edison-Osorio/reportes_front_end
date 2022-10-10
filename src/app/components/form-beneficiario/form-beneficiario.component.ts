import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Beneficiario } from '../../models/Beneficiario';
import { Empleado } from '../../models/Empleado';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-form-beneficiario',
  templateUrl: './form-beneficiario.component.html',
  styleUrls: ['./form-beneficiario.component.css']
})
export class FormBeneficiarioComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  listEmpoye!: Empleado[];

empleado!:Empleado;

  beneficiario:Beneficiario={
    id: 0,
    nombre: '',
    apellido: '',
    porcentaje: '',
    parentesco: '',
    telefono: '',
    correo: '',
    empleado: this.empleado
  }

  constructor(private employeService:EmpleadoService) { }

  ngOnInit(): void {
    this.litsEmpoyes()
  }

  litsEmpoyes(){
this.employeService.listEmploye().subscribe(
  employe=>{
    console.log('Is response the service empoye ', employe);
    this.listEmpoye = employe
  }
)
  }

  formSubmit(){

  }

}
