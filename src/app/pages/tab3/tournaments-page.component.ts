import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader, IonCardTitle, IonCardSubtitle
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import {TitleCasePipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tournaments-page.component.html',
  styleUrls: ['tournaments-page.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, TitleCasePipe, UpperCasePipe, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle],
})
export class TournamentsPage {
  constructor() {}
}
