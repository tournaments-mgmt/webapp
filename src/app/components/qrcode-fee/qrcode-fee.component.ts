import {Component, input, InputSignal, OnInit} from '@angular/core';
import {QRCodeComponent} from "angularx-qrcode";
import {IonLabel} from "@ionic/angular/standalone";
import {TournamentFee} from "@interfaces/tournament";
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-qrcode-fee',
  templateUrl: './qrcode-fee.component.html',
  styleUrls: ['./qrcode-fee.component.scss'],
  imports: [
    QRCodeComponent,
    IonLabel,
  ]
})
export class QrcodeFeeComponent implements OnInit {
  public fee = input<TournamentFee>()

  constructor() {
  }

  ngOnInit() {
  }

}
