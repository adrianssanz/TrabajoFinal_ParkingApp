import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Vehiculo } from '../../interfaces/vehiculo';
import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';
import { ModalAmpliarComponent } from '../modal-ampliar/modal-ampliar.component';

@Component({
  selector: 'app-modal-finalizar',
  templateUrl: './modal-finalizar.component.html',
  styleUrl: './modal-finalizar.component.css',
})
export class ModalFinalizarComponent {
  selectedMatricula: String = '';
  ticketEnCurso: any;
  vehiculo!: Vehiculo;

  constructor(
    private dataService: DataService,
    private apiService: ApiService,
    private matDiaLogRef: MatDialogRef<ModalAmpliarComponent>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.selectedMatricula = this.dataService.getSelectedMatricula();
    this.cargarTicketEnCurso(this.selectedMatricula);
    this.vehiculo = this.dataService.getVehiculo();
  }


  // Carga el ticket en curso
  cargarTicketEnCurso(matricula: String): void {
    this.apiService
      .getTicketEnCurso(this.selectedMatricula)
      .subscribe((data: any) => {
        this.ticketEnCurso = data;
      });
  }

  // Metodo para cerrar el modal
  cerrarModal(): void {
    this.matDiaLogRef.close();
  }

  // Metodo para finalizar el ticket
  confirmar(): void {
    const ticket: { horaInicio?: string; horaFin?: string; vehiculo?: any } =
      {};
    const idTicket: number = this.ticketEnCurso.id;

    //Asigna los valores que pasaremos al metodo de finalizar ticket
    ticket.horaInicio = this.ticketEnCurso.horaInicio;

    ticket.horaFin = new Date().toISOString();

    ticket.vehiculo = this.ticketEnCurso.vehiculo;

    this.apiService.finalizarTicketEnCurso(ticket, idTicket).subscribe(
      (response) => {
        this.dataService.setTicketAñadido(response);
        console.log('Ticket finalizado:', response);
        this.matDiaLogRef.close();
        this.router.navigate(['/dashboard/ticket']);
      },
      (error) => {
        console.error('Error al finalizar el ticket:', error.error);
      }
    );
  }
}
