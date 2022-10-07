import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../models/Empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private url = 'http://localhost:9090/api';

  constructor(private http: HttpClient) {}

  saveEmployee(employe: Empleado) {
    return this.http.post(`${this.url}/empleados`, employe);
  }
}
