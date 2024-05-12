import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private dataService: DataService) {}

  login(matricula: String, password: String): Observable<boolean> {
    return this.http.post<boolean>('/api/login', { matricula, password });
  }

  logout(): void {
    this.dataService.setSelectedMatricula('');
  }

  isLoggedIn(): boolean {
    return !!this.dataService.getSelectedMatricula();
  }
}
