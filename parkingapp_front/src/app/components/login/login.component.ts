import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  uidUsuario: string = '';
  matriculaSeleccionada: string = '';
  email: string = '';
  password: string = '';
  mensajeError: string ='';

  constructor(
    private apiService: ApiService,
    private dataService: DataService,
    private router: Router,
    private loginService: LoginService,
  ) {}

  ngOnInit(): void {
    
  }

  getMatricula(uid: string){
    this.apiService.getVehiculoByUid(uid).subscribe((data:any)=>{
      this.dataService.setSelectedMatricula(data.matricula);
      console.log("Inicio de sesión exitoso.");
      this.router.navigate(["/dashboard"]);
    })
  }

  login(): void {
    this.loginService.login(this.email, this.password).then((response) => {
      this.getMatricula(response.user?.uid || '');
    }).catch(error=>(this.mensajeError = "Credenciales incorrectas.", console.log("ERROR: " + error)));
  }

  goToAddVehiculo(): void {
    this.router.navigate(['/add-vehiculo']);
  }
}
