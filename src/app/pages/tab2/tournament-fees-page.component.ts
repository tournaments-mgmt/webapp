import {Component} from '@angular/core';
import {IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tournament-fees-page.component.html',
  styleUrls: ['tournament-fees-page.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent]
})
export class TournamentFeesPage {

  constructor() {
  }

}
