import {Component, computed, OnInit, Signal} from '@angular/core';
import {IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {QrcodeFeeComponent} from "@components/qrcode-fee/qrcode-fee.component";
import {ApiService} from "@services/api/api.service";
import {TournamentFee, TournamentFeeState} from "@interfaces/tournament";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tournament-fees-page.component.html',
  styleUrls: ['tournament-fees-page.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, QrcodeFeeComponent]
})
export class TournamentFeesPage {
  protected tournamentFeeList: Signal<TournamentFee[]>;
  protected feeConfirmedList: Signal<TournamentFee[]> = computed(() => this.tournamentFeeList().filter((x) => x.state === TournamentFeeState.CONFIRMED));
  protected feeDraftList: Signal<TournamentFee[]> = computed(() => this.tournamentFeeList().filter((x) => x.state === TournamentFeeState.DRAFT));

  constructor(
    private apiService: ApiService,
  ) {
    this.tournamentFeeList = this.apiService.tournamentFee;
  }

  ionViewWillEnter() {
    this.apiService.request.tournament.fee.list();
  }
}
