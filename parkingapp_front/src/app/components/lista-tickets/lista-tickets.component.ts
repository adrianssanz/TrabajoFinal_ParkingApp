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

  // Inicializa la matricula seleccionada recogiendola del dataservice
  // Carga los tickets de la matricula seleccionada
  ngOnInit(): void {
    this.selectedMatricula = this.dataService.getSelectedMatricula();
    this.loadTickets(this.selectedMatricula);
  }

  // Vuelve al login y establece la matricula vacia para "cerrar" la sesión.
  goToHome(): void {
    this.router.navigate(['/']);
    this.dataService.setSelectedMatricula('');
    console.log("Sesión cerrada.");
  }

  // Redirige al componente dashboard en ruta /dashboard
  goToDashboard(): void{
    this.router.navigate(['/dashboard']);
  }

  // Metodo para añadir un ticket nuevo en caso de no haber ninguno
  /*nuevoTicket(): void {
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
  }*/

  // Carga los tickets de la matricula seleccionada mediante el apiservice
  // que accede a la api
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
