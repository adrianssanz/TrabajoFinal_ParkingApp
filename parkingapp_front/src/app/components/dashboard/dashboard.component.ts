import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedMatricula: string = '';
  ticketData: any;
  mensaje: string = '';

  constructor(
    private dataService: DataService,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.selectedMatricula = this.dataService.getSelectedMatricula();
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }

  goToListaTickets(): void {
    this.router.navigate(['/lista-tickets']);
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
        console.error('Error al agregar el ticket:', error);
        this.router.navigate(['/dashboard/ticket']);  
      }
    );
  }
}

