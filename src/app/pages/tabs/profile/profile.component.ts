import {Component, OnInit} from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {QRCodeComponent} from "angularx-qrcode";
import {AuthService} from "@services/auth/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonListHeader,
    IonInput,
    QRCodeComponent
  ]
})
export class ProfileComponent implements OnInit {
  public user: any;

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.user = this.authService.getUser();
  }

}
