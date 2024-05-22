import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-ampliar',
  templateUrl: './modal-ampliar.component.html',
  styleUrl: './modal-ampliar.component.css'
})
export class ModalAmpliarComponent implements OnInit {
  selectedMatricula: String = '';
  duracion: number = 1;
  mensaje: string='';

  constructor(
    private dataService: DataService,
    private matDialogRef: MatDialogRef<ModalAmpliarComponent>
  ){}

  ngOnInit(): void {
    this.selectedMatricula = this.dataService.getSelectedMatricula();
  }

  cerrarModal():void{
    this.matDialogRef.close();
  }

  confirmar(): void{
    this.matDialogRef.close();
  }
}
