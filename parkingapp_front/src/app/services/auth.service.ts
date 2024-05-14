import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private dataService: DataService) {}

  login(matricula: string): boolean {
    if (matricula) {
      this.dataService.setSelectedMatricula(matricula);
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.dataService.setSelectedMatricula('');
  }

  isLoggedIn(): boolean {
    return !!this.dataService.getSelectedMatricula();
  }
}
