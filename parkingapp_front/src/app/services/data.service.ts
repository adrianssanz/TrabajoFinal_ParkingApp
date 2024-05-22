import { Injectable } from '@angular/core';
import { Vehiculo } from '../interfaces/vehiculo';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private selectedMatricula: string = '';
  private ticketAñadido: any;
  private vehiculo!: Vehiculo;

  constructor() {}

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

  setVehiculo(vehiculo: Vehiculo): void {
    this.vehiculo = vehiculo;
  }

  getVehiculo(): Vehiculo {
    return this.vehiculo;
  }
}
