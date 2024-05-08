import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectedMatricula: string = '';

  private ticketAñadido: any;

  constructor() { }

  setSelectedMatricula(matricula: string): void {
    this.selectedMatricula = matricula;
  }

  getSelectedMatricula(): string {
    return this.selectedMatricula;
  }

  setTicketAñadido(response: any): void {
    this.ticketAñadido = response;
  }

  getTicketAñadido(): any {
    return this.ticketAñadido;
  }
}