import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectedMatricula: string = '';

  constructor() { }

  setSelectedMatricula(matricula: string): void {
    this.selectedMatricula = matricula;
  }

  getSelectedMatricula(): string {
    return this.selectedMatricula;
  }
}