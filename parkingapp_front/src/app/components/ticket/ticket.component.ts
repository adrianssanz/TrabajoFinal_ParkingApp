import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  ticketData: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.ticketData = this.dataService.getTicketAñadido();
    console.log('Ticket Data:', this.ticketData);
    this.dataService.setTicketAñadido(null);
  }
}