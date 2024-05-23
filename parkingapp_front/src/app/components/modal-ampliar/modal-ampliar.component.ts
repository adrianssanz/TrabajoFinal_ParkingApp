import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Vehiculo } from '../../interfaces/vehiculo';

@Component({
  selector: 'app-modal-ampliar',
  templateUrl: './modal-ampliar.component.html',
  styleUrl: './modal-ampliar.component.css'
})
export class ModalAmpliarComponent implements OnInit {
  selectedMatricula: String = '';
  duracion: number = 1;
  tarifaHora: number = 0;
  precio!: number;
  mensaje: string='';
  ticketEnCurso: any;
  vehiculo!: Vehiculo;

  constructor(
    private dataService: DataService,
    private apiService: ApiService,
    private matDiaLogRef: MatDialogRef<ModalAmpliarComponent>,
    private router: Router
  ){}

  ngOnInit(): void {
    this.selectedMatricula = this.dataService.getSelectedMatricula();
    this.cargarTicketEnCurso(this.selectedMatricula);
    this.vehiculo = this.dataService.getVehiculo();
  }

  // Calcula el precio que tendra la ampliación para mostrarlo en el html
  calcularPrecio(){
    this.tarifaHora = this.vehiculo.tipoVehiculo.tarifaHora;
    this.precio= this.duracion* this.tarifaHora;
  }

  // Carga el ticket en curso 
  cargarTicketEnCurso(matricula: String):void{
    this.apiService.getTicketEnCurso(this.selectedMatricula).subscribe((data:any)=>{
      this.ticketEnCurso=data;
    })
  }

  // Metodo para cerrar el modal
  cerrarModal():void{
    this.matDiaLogRef.close();
  }

  // Metodo para ampliar el ticket
  confirmar(): void{
    const ticket: {horaInicio?: string, horaFin?: string, vehiculo?: any}={}
    const idTicket: number = this.ticketEnCurso.id;

    //Asigna los valores que pasaremos al metodo de ampliar ticket
    ticket.horaInicio = this.ticketEnCurso.horaInicio;

    const horaFinDate = new Date(this.ticketEnCurso.horaFin);
    //Amplia la hora de fin segun lo que se elija en el modal
    horaFinDate.setHours(horaFinDate.getHours() + this.duracion);
    const horaFin = horaFinDate.toISOString();
    ticket.horaFin= horaFin;
    
    console.log(this.ticketEnCurso.vehiculo)
    ticket.vehiculo = this.ticketEnCurso.vehiculo;

    this.apiService.ampliarTicketEnCurso(ticket, idTicket).subscribe(
      (response) => {
        this.dataService.setTicketAñadido(response);
        console.log('Ticket ampliado:', response);
        this.matDiaLogRef.close();
        this.router.navigate(['/dashboard/ticket']);

      },
      (error) => {
        console.error('Error al ampliar el ticket:', error.error);
      }
    );
  }
}
