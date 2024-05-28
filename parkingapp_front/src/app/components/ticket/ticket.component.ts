import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAmpliarComponent } from '../modal-ampliar/modal-ampliar.component';
import { ModalFinalizarComponent } from '../modal-finalizar/modal-finalizar.component';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  // Recoge los datos que mostrará en el componente ticket
  @Input() ticketData: any;

  constructor(private matDialog: MatDialog) {}

  // Metodo para abrir el modal para ampliar un ticket
  abrirModalAmpliar(): void {
    this.matDialog.open(ModalAmpliarComponent);
  }

  // Metodo para abrir el modal para ampliar un ticket
  abrirModalFinalizar(): void {
    this.matDialog.open(ModalFinalizarComponent);
  }

  // Metodo para calcular la duracion del ticket y mostrarlo en el html
  calcularDuracion(): string {
    if (
      this.ticketData &&
      this.ticketData.horaInicio &&
      this.ticketData.horaFin
    ) {
      // recojo las horas de inicio y fin del ticket
      const inicio = new Date(this.ticketData.horaInicio);
      const final = new Date(this.ticketData.horaFin);

      // calculo la diferencia en milisegundos
      const milisegundos = final.getTime() - inicio.getTime();
      const horas = Math.floor(milisegundos / (1000 * 60 * 60));
      const minutos = Math.floor((milisegundos % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((milisegundos % (1000 * 60)) / 1000);

      // formateo para que tengan minimo 2 cifras
      const horas2 = horas.toString().padStart(2, '0');
      const minutos2 = minutos.toString().padStart(2, '0');
      const segundos2 = segundos.toString().padStart(2, '0');

      // las devuelvo al html
      return `${horas2}:${minutos2}:${segundos2}`;
    } else {
      return '0';
    }
  }
}
