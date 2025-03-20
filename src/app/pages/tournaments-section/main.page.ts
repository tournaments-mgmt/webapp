import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonNav} from '@ionic/angular/standalone';
import {TournamentsPage} from "@pages/tournaments-section/tournaments/tournaments-page.component";
import {TournamentService} from "@services/tournament/tournament.service";

@Component({
  selector: 'app-tournaments-section-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonNav]
})
export class MainPage {
  component = TournamentsPage;

  constructor(
    private  tournamentService: TournamentService,
  ) {
  }

  ionViewDidEnter() {
    this.tournamentService.getTournaments();
  }

}
