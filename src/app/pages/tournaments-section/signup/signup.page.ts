import {Component, OnInit, Signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton, IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonIcon, IonImg,
  IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonText, IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {Tournament} from "@interfaces/tournament";
import {Game, GameCode} from "@interfaces/game";
import {GameService} from "@services/game/game.service";
import {addIcons} from "ionicons";
import {calendarNumberOutline, clipboardOutline} from "ionicons/icons";
import {AuthService} from "@services/auth/auth.service";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons, IonItem, IonSelect, IonSelectOption, IonButton, IonText, IonList, IonImg, IonThumbnail, IonLabel, IonIcon]
})
export class SignupPage implements OnInit {

  public tournament!: Tournament;
  public game!: Game | null;
  protected players: Signal<any>;

  constructor(
    private gameService: GameService,
    private authService: AuthService,
  ) {
    this.players = toSignal(this.authService.players.asObservable());
    this.authService.getPlayerForTournament(this.tournament);
    addIcons({calendarNumberOutline, clipboardOutline});
  }

  ngOnInit() {
    this.game = this.gameService.getGameByCode(this.tournament.gameCode);
  }

  getPlatformLogo() {
    return `assets/platforms/${this.tournament.platform}.png`;
  }

}
