import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ModalAmpliarComponent } from '../modal-ampliar/modal-ampliar.component';
import { Vehiculo } from '../../interfaces/vehiculo';
import { ApiService } from '../../services/api.service';
import { ModalFinalizarComponent } from '../modal-finalizar/modal-finalizar.component';

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
  ticketEnCurso!: any;

  constructor(
    private dataService: DataService,
    private router: Router,
    private matDialog: MatDialog,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    //Recoge la matricula almacenada en el dataservice
    this.selectedMatricula = this.dataService.getSelectedMatricula();

    //Alamcena el vehiculo del dataservice en la variable vehiculo para usarla despues
    this.vehiculo = this.dataService.getVehiculo();

    this.cargarTicketEnCurso();
  }

  // Metodo para abrir el modal para añadir un ticket
  abrirModal(): void {
    this.matDialog.open(ModalComponent);
  }

  // Metodo que carga el ticket en curso si lo hay
  cargarTicketEnCurso():void{
    this.apiService.getTicketEnCurso(this.selectedMatricula).subscribe((data:any)=>{
      this.ticketEnCurso=data;
    })
  }

  // Metodo para abrir el modal para ampliar un ticket
  abrirModalAmpliar():void{
    // Comprueba si hay un ticket en curso,
    // Si lo hay abre el componente ampliar 
    if (this.ticketEnCurso){
      this.matDialog.open(ModalAmpliarComponent);
    } else {
      this.mensaje="No tiene ningun ticket en curso.";
    }
   
  }

  // Metodo para abrir el modal para finalizar un ticket
  abrirModalFinalizar():void{
    // Comprueba si hay un ticket en curso,
    // Si lo hay abre el componente finalizar 
    if (this.ticketEnCurso){
      this.matDialog.open(ModalFinalizarComponent);
    } else {
      this.mensaje="No tiene ningun ticket en curso.";
    }
   
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
