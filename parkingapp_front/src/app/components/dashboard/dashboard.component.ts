import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ModalAmpliarComponent } from '../modal-ampliar/modal-ampliar.component';
import { Vehiculo } from '../../interfaces/vehiculo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  selectedMatricula: string = '';
  ticketData: any;
  mensaje: String = '';
  vehiculo!: Vehiculo;

  constructor(
    private dataService: DataService,
    private router: Router,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    //Recoge la matricula almacenada en el dataservice
    this.selectedMatricula = this.dataService.getSelectedMatricula();

    //Alamcena el vehiculo del dataservice en la variable vehiculo para usarla despues
    this.vehiculo = this.dataService.getVehiculo();
  }

  // Metodo para abrir el modal para añadir un ticket
  abrirModal(): void {
    this.matDialog.open(ModalComponent);
  }

  // Metodo para abrir el modal para ampliar un ticket
  abrirModalAmpliar():void{
    this.matDialog.open(ModalAmpliarComponent);
  }

  // Metodo para ir al login o "cerrar sesion"
  goToHome(): void {
    this.router.navigate(['/']);
    this.dataService.setSelectedMatricula('');
    console.log('Sesión cerrada.');
  }

  // Metodo para ver la lista de tickets
  goToListaTickets(): void {
    this.router.navigate(['/lista-tickets']);
  }
}
