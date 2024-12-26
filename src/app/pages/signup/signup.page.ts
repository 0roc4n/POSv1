import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonInputPasswordToggle, IonButton,IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonInput, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonInputPasswordToggle, IonButton, IonItem, IonInput, IonIcon, RouterModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
  // imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SignupPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
