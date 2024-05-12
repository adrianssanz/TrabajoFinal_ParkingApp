import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-ticket-nuevo',
  templateUrl: './ticket-nuevo.component.html',
  styleUrls: ['./ticket-nuevo.component.css']
})
export class TicketNuevoComponent implements OnInit {
  ticketData: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.ticketData = this.dataService.getTicketAñadido();
    console.log('Ticket Data:', this.ticketData);
    this.dataService.setTicketAñadido(null);
  }
}