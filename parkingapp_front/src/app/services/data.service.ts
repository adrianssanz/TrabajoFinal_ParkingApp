import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectedMatricula: String = '';

  private ticketAñadido: any;

  constructor() { }

  setSelectedMatricula(matricula: String): void {
    this.selectedMatricula = matricula;
  }

  getSelectedMatricula(): String {
    return this.selectedMatricula;
  }

  setTicketAñadido(response: any): void {
    this.ticketAñadido = response;
  }

  getTicketAñadido(): any {
    return this.ticketAñadido;
  }
}