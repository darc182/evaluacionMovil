import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { IonDatetime } from '@ionic/angular/standalone';
import { IonLabel,IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet,IonDatetime,IonLabel,IonItem],
})
export class AppComponent {
  constructor() {}
}
