import {Component} from '@angular/core';
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonSegment,
  IonSegmentButton,
  IonSegmentContent,
  IonSegmentView,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {add} from "ionicons/icons";

@Component({
  selector: 'app-entrants',
  templateUrl: 'entrants-page.component.html',
  styleUrls: ['entrants-page.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonSegmentContent, IonSegmentView, IonSegmentButton, IonLabel, IonSegment, IonList, IonItem, IonFab, IonFabButton, IonIcon],
})
export class EntrantsPage {
  constructor() {

    addIcons({add})
  }

}
