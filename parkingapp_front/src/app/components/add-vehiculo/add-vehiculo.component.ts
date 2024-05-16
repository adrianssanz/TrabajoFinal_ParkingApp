import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-add-vehiculo',
  templateUrl: './add-vehiculo.component.html',
  styleUrls: ['./add-vehiculo.component.css']
})
export class AddVehiculoComponent implements OnInit {
  matricula: string = '';
  email: string = '';
  password: string = '';
  tipoId: number = 0;
  formInvalid: boolean = false;
  mensaje: string = '';
  tipoMensaje: number = 0;

  constructor(
    private apiService: ApiService, 
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }

  validarMatricula(matricula: string): boolean {
    const patron = /^[0-9]{4}[a-z]{3}$/i;
    return patron.test(matricula);
  }

  validarEmail(email: string): boolean {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    return patron.test(email);
  }

  validarPassword(password: string): boolean{
    const patron = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d\-]+$/;
    return patron.test(password);
  }


  // Metodo para agregar vehiculo a la base de datos, se le pasa un objeto vehiculo con la matricula,
  // el tipo, y el uid del usuario de firebase al que esta asociado.
  agregarVehiculo(vehiculo: any, tipoId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiService.agregarVehiculo(vehiculo, tipoId)
        .subscribe((data: any) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    });
  }

  // Al hacer submit del formulario se registra el usuario en firebase y mediante el metodo agregarVehiculo
  // se registra el vehiculo asociado en la base de datos.
  onSubmit(): void {
    if (!this.matricula || this.tipoId === 0 || !this.validarMatricula(this.matricula) || !this.email || !this.password || !this.validarEmail(this.email) || !this.validarPassword(this.password)) {
      this.formInvalid = true;
      return; 
    }

    this.apiService.getVehiculoByMatricula(this.matricula).subscribe(
      (vehiculo: any) => {
        this.mensaje = "El vehículo ya esta registrado.";
        this.tipoMensaje = 2;
      }, 
      (error: any) => {
        if (error.status === 404) {
          this.loginService.register(this.email, this.password).then((response)=>{
            const vehiculo = { matricula: this.matricula.toUpperCase(), uid:response.user?.uid }
            this.agregarVehiculo(vehiculo, this.tipoId).then((response)=>{
              this.mensaje = "Vehiculo añadido exitosamente: " + response.matricula;
              this.tipoMensaje = 1;
            }).catch(error =>(
              this.mensaje = error.error,
              this.tipoMensaje = 2
            ));
          }).catch(error => (this.mensaje = "Error al registrar el usuario."));
        } else {
          this.mensaje = "Error.";
          this.tipoMensaje = 2;
        }
      }
    );
    
  }
}
