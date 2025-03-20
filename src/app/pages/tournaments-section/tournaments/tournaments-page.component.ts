import {Component, computed, OnInit, Signal} from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonNavLink, IonRefresher, IonRefresherContent,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {UpperCasePipe} from "@angular/common";
import {InfoPage} from "@pages/tournaments-section/info/info.page";
import {SignupPage} from "@pages/tournaments-section/signup/signup.page";
import {TournamentService} from "@services/tournament/tournament.service";
import {Tournament, TournamentState} from "@interfaces/tournament";
import {GameService} from "@services/game/game.service";
import {GameCode} from "@interfaces/game";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tournaments-page.component.html',
  styleUrls: ['tournaments-page.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, UpperCasePipe, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonNavLink, IonButton, IonText, IonRefresher, IonRefresherContent],
})
export class TournamentsPage implements OnInit {

  tournaments: Signal<Tournament[] | undefined>;
  scheduledList = computed(() => this.tournaments()?.filter((x) => x.state === TournamentState.SCHEDULED));
  runningList = computed(() => this.tournaments()?.filter((x) => x.state === TournamentState.RUNNING));
  protected readonly InfoPage = InfoPage;
  protected readonly SignupPage = SignupPage;

  constructor(
    private tournamentService: TournamentService,
    private gameService: GameService,
  ) {
    this.tournaments = toSignal(this.tournamentService.tournaments.asObservable())
    this.scheduledList = this.tournaments
  }

  ngOnInit() {
    console.log('here')
  }

  getGameByCode(code: GameCode) {
    return this.gameService.getGameByCode(code);
  }

  handleRefresh(event: any) {
    this.tournamentService.getTournaments();
    (event.target as HTMLIonRefresherElement).complete()
  }
}
