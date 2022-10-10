import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../models/Empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private url = 'http://localhost:9090/api';

  constructor(private http: HttpClient) {}

  listEmploye():Observable<Empleado[]>{

  return this.http.get<Empleado[]>(`${this.url}/empleados`)
  }

  saveEmployee(employe: Empleado):Observable<Empleado> {
    return this.http.post<Empleado>(`${this.url}/empleados`, employe);
  }
}
