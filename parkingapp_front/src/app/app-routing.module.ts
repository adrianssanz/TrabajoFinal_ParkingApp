import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.guard';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddVehiculoComponent } from './components/add-vehiculo/add-vehiculo.component';
import { LoginComponent } from './components/login/login.component';
import { ListaTicketsComponent } from './components/lista-tickets/lista-tickets.component';
import { TicketNuevoComponent } from './components/ticket-nuevo/ticket-nuevo.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'add-vehiculo', component: AddVehiculoComponent },
  { path: 'lista-tickets', component: ListaTicketsComponent, canActivate:[AuthGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard],
  children: [
    { path: "ticket", component: TicketNuevoComponent }
  ]},
  { path: '**', component: ErrorComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
