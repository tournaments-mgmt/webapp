import {Component} from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tournaments-page.component.html',
  styleUrls: ['tournaments-page.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, UpperCasePipe, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle],
})
export class TournamentsPage {
  constructor() {
  }
}
