import { Component, OnInit, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { IonImg, IonCol, IonRow, IonButton,IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonInput, IonItem, IonThumbnail, IonCard } from '@ionic/angular/standalone';
@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.page.html',
  styleUrls: ['./cashier.page.scss'],
  standalone: true,
  imports: [ IonCard, IonImg, IonThumbnail, IonCol, IonRow, IonButton, IonItem, IonInput, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class CashierPage implements OnInit {

  items: any[] = [];
  allItems: any[] = [];
  private api = inject(ApiService);

  constructor() {}
  ngOnInit(){
    this.getItems();
  }
  getItems(){
    this.allItems = this.api.items;
    this.items = [...this.allItems]; 
  }

}
