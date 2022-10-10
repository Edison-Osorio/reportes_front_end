import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Empleado } from '../../models/Empleado';
import { EmpleadoService } from '../../services/empleado.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class FormEmpleadoComponent implements OnInit {
  listEmpoyes!: Empleado[];

  dataSource!:Empleado[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  empleado: Empleado = {
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
    primaSeguro: '',
  };

  constructor(private empleadoService: EmpleadoService, private dialog:MatDialog) {}
  
  ngOnInit(): void {
    this.listEmpoye()
  }
  
    openDialog() {
      this.dialog.open(FormEmpleadoComponent);
    }

  listEmpoye() {
    this.empleadoService.listEmploye().subscribe((employe) => {
      this.listEmpoyes = employe;
      this.dataSource = employe;
    });
  }

  formSubmit() {
    if (this.empleado.id == 0 || this.empleado.id == null) {
      console.log('Hola que mas');

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
    if (this.empleado.fechaNacimiento == null) {
      return;
    }
    if (
      this.empleado.nacionalidad == '' ||
      this.empleado.nacionalidad == null
    ) {
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
      (res) => {
        console.log(res);
        Swal.fire('Guardado', 'Se guardo el empleado con exito!!', 'success');
      },
      (err) => {
        console.log('este es el erro ', err);
        Swal.fire('Error', 'Error al guardar el empleado', 'error');
      }
    );
  }
}
