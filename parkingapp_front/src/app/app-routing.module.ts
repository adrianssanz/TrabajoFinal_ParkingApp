import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { ErrorComponent } from './error/error.component';
import { AddVehiculoComponent } from './add-vehiculo/add-vehiculo.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'add-vehiculo', component: AddVehiculoComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
