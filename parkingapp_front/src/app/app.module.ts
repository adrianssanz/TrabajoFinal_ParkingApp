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
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalAmpliarComponent } from './components/modal-ampliar/modal-ampliar.component';
import { ModalFinalizarComponent } from './components/modal-finalizar/modal-finalizar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ErrorComponent,
    AddVehiculoComponent,
    TicketNuevoComponent,
    ListaTicketsComponent,
    TicketComponent,
    ModalComponent,
    ModalAmpliarComponent,
    ModalFinalizarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [LoginService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
