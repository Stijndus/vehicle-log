import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonApp } from '@ionic/angular';

@Component({
  selector: 'app-root',
  imports: [IonApp, RouterOutlet],
  template: '<ion-app><router-outlet /></ion-app>',
})
export class App {}
