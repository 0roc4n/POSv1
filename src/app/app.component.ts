import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Camera } from '@awesome-cordova-plugins/camera';
// import {AngularFireModule} from '@angular/fire/compat';
// import { AngularFireAuthModule} from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet,],
})
export class AppComponent {
  constructor() {}
}
