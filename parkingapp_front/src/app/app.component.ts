import { Component, OnInit } from '@angular/core';
import { claves } from '../claves';

import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'parkingapp_front';

  ngOnInit(): void {
    firebase.initializeApp({
      // Añadir aqui las claves de firebase
      apiKey: claves.apiKey,
      authDomain: claves.authDomain
    });
  }
}
