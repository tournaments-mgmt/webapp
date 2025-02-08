import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tournament-fees-page.component.html',
  styleUrls: ['tournament-fees-page.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class TournamentFeesPage {

  constructor() {}

}
