import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Vehiculo } from '../../interfaces/vehiculo';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements OnInit {
  constructor(
    public matDiaLogRef: MatDialogRef<ModalComponent>,
    private apiService: ApiService ,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.selectedMatricula = this.dataService.getSelectedMatricula();
    this.vehiculo = this.dataService.getVehiculo();
  }

  tarifaHora: number = 0;
  duracion: number = 1;
  precio!: number;
  selectedMatricula: String = '';
  mensaje: string='';
  vehiculo!: Vehiculo;

  calcularPrecio(){
    this.tarifaHora = this.vehiculo.tipoVehiculo.tarifaHora;
    this.precio= this.duracion* this.tarifaHora;
  }

  cerrarModal(): void {
    this.matDiaLogRef.close();
    console.log(this.precio)
  }

  confirmar(): void {
    const horaInicioDate = new Date();
    const ticket: { horaInicio?: string; horaFin?: string } = {};

    const horaFinDate = new Date(horaInicioDate);
    horaFinDate.setHours(horaFinDate.getHours() + this.duracion);

    const horaFin = horaFinDate.toISOString();

    ticket.horaFin = horaFin;
    ticket.horaInicio = horaInicioDate.toISOString();

    this.apiService.agregarTicket(ticket, this.selectedMatricula).subscribe(
      (response) => {
        this.dataService.setTicketAñadido(response);
        console.log('Ticket agregado:', response);
        this.matDiaLogRef.close();
        this.router.navigate(['/dashboard/ticket']);

      },
      (error) => {
        console.error('Error al agregar el ticket:', error.error);
        this.mensaje = 'Su vehiculo ya tiene un ticket activo.';
      }
    );
  }
}
