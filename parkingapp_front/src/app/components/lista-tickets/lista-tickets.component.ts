import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-lista-tickets',
  templateUrl: './lista-tickets.component.html',
  styleUrl: './lista-tickets.component.css'
})
export class ListaTicketsComponent implements OnInit {
  selectedMatricula: string = '';

  constructor(
    private dataService: DataService
  ){}

  ngOnInit(): void {
    this.selectedMatricula = this.dataService.getSelectedMatricula();
  }

}
