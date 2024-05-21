import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  // Recoge los datos que mostrará en el componente ticket
  @Input() ticketData: any;

  calcularDuracion(): number {
    if (this.ticketData && this.ticketData.horaInicio && this.ticketData.horaFin) {
      const inicio = new Date(this.ticketData.horaInicio);
      const final = new Date(this.ticketData.horaFin);
      const milisegundos = final.getTime() - inicio.getTime();
      const horas = Math.floor(milisegundos / (1000 * 60 * 60));
      return horas;
    } else {
      return 0;
    }
  }
}
