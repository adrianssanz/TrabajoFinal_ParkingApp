import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  vehiculos: any[] = [];
  matriculaSeleccionada: string = '';

  constructor(private apiService: ApiService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getVehiculos();
  }

  getVehiculos(): void {
    this.apiService.getVehiculos()
  .subscribe((data: any) => {
    this.vehiculos = data;
  });

  }

  login(): void {
    if (this.authService.login(this.matriculaSeleccionada)) {
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Inicio de sesión fallido');
    }
  }

  goToAddVehiculo(): void {
    this.router.navigate(['/add-vehiculo']);
  }
}
