import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://localhost:8080/api/vehiculos';

  constructor(private http: HttpClient) { }

  getVehiculos() {
    return this.http.get(this.apiUrl);
  }
}
