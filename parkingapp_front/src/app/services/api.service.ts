import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  getVehiculoByMatricula(matricula: string){
    return this.http.get(`${this.apiUrl}/vehiculos/matricula/${matricula}`);
  }

  agregarVehiculo(vehiculo: any, tipoId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/vehiculos/${tipoId}`, vehiculo);
  }

  getTickets(matricula: String): Observable<any>{
    return this.http.get(`${this.apiUrl}/tickets/matricula/${matricula}`); 
  }

  agregarTicket(matricula: String): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/tickets/${matricula}`, null);
  }
}
