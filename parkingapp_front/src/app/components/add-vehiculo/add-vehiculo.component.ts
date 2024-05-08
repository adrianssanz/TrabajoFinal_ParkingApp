import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vehiculo',
  templateUrl: './add-vehiculo.component.html',
  styleUrls: ['./add-vehiculo.component.css']
})
export class AddVehiculoComponent implements OnInit {
  matricula: string = '';
  tipoId: number = 0;
  formInvalid: boolean = false;
  mensaje: string = '';
  tipoMensaje: number = 0;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }

  validarMatricula(matricula: string): boolean {
    const patron = /^[0-9]{4}[a-z]{3}$/i;
    return patron.test(matricula);
  }

  agregarVehiculo(): void {
    if (!this.matricula || this.tipoId === 0) {
      this.formInvalid = true;
      return; 
    }

    const vehiculo = { matricula: (this.matricula || '').toUpperCase() };
    this.apiService.agregarVehiculo(vehiculo, this.tipoId)
      .subscribe((data: any) => {
        console.log('Vehículo añadido exitosamente:', data);
        this.mensaje = "Vehiculo añadido exitoxamente: " + data.matricula;
        this.tipoMensaje = 1;
      }, (error) => {
        console.error('Error al añadir vehículo:', error);
        this.mensaje = error.error;
        this.tipoMensaje = 2;
      });

  }
}
