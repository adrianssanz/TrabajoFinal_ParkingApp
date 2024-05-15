import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { AddVehiculoComponent } from './components/add-vehiculo/add-vehiculo.component';
import { ListaTicketsComponent } from './components/lista-tickets/lista-tickets.component';
import { TicketNuevoComponent } from './components/ticket-nuevo/ticket-nuevo.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { LoginService } from './services/login.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ErrorComponent,
    AddVehiculoComponent,
    TicketNuevoComponent,
    ListaTicketsComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LoginService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
