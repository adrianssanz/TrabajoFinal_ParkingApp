import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from '../interfaces/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getVehiculos() {
    return this.http.get(`${this.apiUrl}/vehiculos`);
  }

  getVehiculoByUid(uid: string) {
    return this.http.get(`${this.apiUrl}/vehiculos/uid/${uid}`);
  }

  getVehiculoByMatricula(matricula: string): Observable<Vehiculo>{
    return this.http.get<Vehiculo>(`${this.apiUrl}/vehiculos/matricula/${matricula}`);
  }

  agregarVehiculo(vehiculo: any, tipoId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/vehiculos/${tipoId}`, vehiculo);
  }

  getTickets(matricula: String): Observable<any>{
    return this.http.get(`${this.apiUrl}/tickets/matricula/${matricula}`); 
  }

  getTicketEnCurso(matricula: String): Observable<any>{
    return this.http.get(`${this.apiUrl}/tickets/en-curso/matricula/${matricula}`);
  }

  ampliarTicketEnCurso(ticket: any, id: number){
    return this.http.put<any>(`${this.apiUrl}/tickets/${id}/ampliar`, ticket);
  }

  finalizarTicketEnCurso(ticket: any, id: number){
    return this.http.put<any>(`${this.apiUrl}/tickets/${id}/finalizado`, ticket);
  }

  agregarTicket(ticket: any, matricula: String): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/tickets/${matricula}`, ticket);
  }
}
