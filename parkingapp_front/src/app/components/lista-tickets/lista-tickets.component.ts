import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-tickets',
  templateUrl: './lista-tickets.component.html',
  styleUrls: ['./lista-tickets.component.css']
})
export class ListaTicketsComponent implements OnInit {
  selectedMatricula: String = '';

  mensaje: String = '';
  tickets: any[] = [];

  constructor(private dataService: DataService, private apiService: ApiService, private router: Router,) {}

  ngOnInit(): void {
    this.selectedMatricula = this.dataService.getSelectedMatricula();
    this.loadTickets(this.selectedMatricula);
  }

  goToHome(): void {
    this.router.navigate(['/']);
    this.dataService.setSelectedMatricula('');
    console.log("Sesión cerrada.");
  }

  goToDashboard(): void{
    this.router.navigate(['/dashboard']);
  }

  nuevoTicket(): void {
    this.apiService.agregarTicket(this.selectedMatricula).subscribe(
      (response) => {
        this.dataService.setTicketAñadido(response);
        this.mensaje = "Ticket añadido con éxito.";
        console.log('Ticket agregado:', response);
        this.router.navigate(['/dashboard/ticket']);      
      },
      (error) => {
        console.error('Error al agregar el ticket:', error.error);
        this.router.navigate(['/dashboard/ticket']);  
      }
    );
  }

  loadTickets(matricula: String): void {
    this.apiService.getTickets(matricula).subscribe(
      (data: any[]) => {
        this.tickets = data;
      },
      (error) => {
        console.error('Error al cargar los tickets:', error);
      }
    );
  }
}
