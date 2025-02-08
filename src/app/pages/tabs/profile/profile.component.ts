import { Component, OnInit } from '@angular/core';
import {ExploreContainerComponent} from "../../../explore-container/explore-container.component";
import {
  IonAvatar, IonChip,
  IonContent,
  IonHeader, IonInput,
  IonItem,
  IonLabel,
  IonList, IonListHeader, IonText,
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
    ExploreContainerComponent,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonListHeader,
    IonChip,
    IonText,
    IonInput,
    QRCodeComponent
  ]
})
export class ProfileComponent  implements OnInit {
  public user: any;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
  }

}
