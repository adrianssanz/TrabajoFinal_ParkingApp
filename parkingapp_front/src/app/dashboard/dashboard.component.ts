import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedMatricula: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.selectedMatricula = this.dataService.getSelectedMatricula();
  }
}
