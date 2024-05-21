import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedMatricula: String = '';
  ticketData: any;
  mensaje: String = '';

  constructor(
    private dataService: DataService,
    private router: Router,
    private apiService: ApiService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.selectedMatricula = this.dataService.getSelectedMatricula();
  }

  abrirModal():void{
    this.matDialog.open(ModalComponent);
  }

  goToHome(): void {
    this.router.navigate(['/']);
    this.dataService.setSelectedMatricula('');
    console.log("Sesión cerrada.");
  }

  goToListaTickets(): void {
    this.router.navigate(['/lista-tickets']);
  }

  nuevoTicket(): void {
    const horaInicioDate = new Date();
    const ticket: { horaInicio?: string; horaFin?: string } = {};

    const horaFinDate = new Date(horaInicioDate);
    horaFinDate.setHours(horaFinDate.getHours() + 2);

    const horaFin = horaFinDate.toISOString();

    ticket.horaFin = horaFin;
    ticket.horaInicio = horaInicioDate.toISOString();

    this.apiService.agregarTicket(ticket, this.selectedMatricula).subscribe(
      (response) => {
        this.dataService.setTicketAñadido(response);
        this.mensaje = 'Ticket añadido con éxito.';
        console.log('Ticket agregado:', response);
        this.router.navigate(['/dashboard/ticket']);
      },
      (error) => {
        console.error('Error al agregar el ticket:', error.error);
        this.router.navigate(['/dashboard/ticket']);
      }
    );
  }
}
