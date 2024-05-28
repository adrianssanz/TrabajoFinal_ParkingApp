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
export class LoginComponent{
  uidUsuario: string = '';
  matriculaSeleccionada: string = '';
  email: string = '';
  password: string = '';
  mensajeError: string ='';
  campoPassword: string = 'password';
  mostrarPassword: boolean = false;

  constructor(
    private apiService: ApiService,
    private dataService: DataService,
    private router: Router,
    private loginService: LoginService,
  ) {}

  // Metodo para mostrar u ocultar la contraseña en el input
  botonMostrarPassword() {
    this.mostrarPassword = !this.mostrarPassword;
    this.campoPassword = this.mostrarPassword ? 'text' : 'password';
  }

  // Metodo para obtener la matricula por uid, la obtiene mediante apiservice y la
  // almacena en el dataservice para ser usada en el componente dashboard
  getMatricula(uid: string){
    this.apiService.getVehiculoByUid(uid).subscribe((data:any)=>{
      this.dataService.setSelectedMatricula(data.matricula);
      this.apiService.getVehiculoByMatricula(data.matricula).subscribe((data:any)=>{
        this.dataService.setVehiculo(data);
        console.log("Inicio de sesión exitoso.");
        this.router.navigate(["/dashboard"]);
      })
      
    })
  }

  // Metodo para login, mediante el servicio de firebase logea usando email y contraseña
  // Obtiene el uid del usuario logeado y lo envia al metodo getMatricula
  login(): void {
    this.loginService.login(this.email, this.password).then((response) => {
      this.getMatricula(response.user?.uid || '');
    }).catch(error=>(this.mensajeError = "Credenciales incorrectas.", console.log("ERROR: " + error)));
  }

  goToAddVehiculo(): void {
    this.router.navigate(['/add-vehiculo']);
  }


  // Metodos para la exposición

  // Metodo para login sin autenticacion de Firebase tipo coche
  coche(): void{
    this.getMatricula("QhdPIrxLjEa7QSaJjNw99hy1dY73")
  }

  // Metodo para login sin autenticacion de Firebase tipo moto
  moto(): void{
    this.getMatricula("fKniDMyy9gWE44RiUpdGeYPeWSu1")
  }

  // Metodo para login sin autenticacion de Firebase tipo furgoneta
  furgoneta(): void{
    this.getMatricula("Xhg0bENatEYC7EdOOQKMDBSaZJB2")
  }
}
