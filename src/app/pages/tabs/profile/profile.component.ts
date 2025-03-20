import {Component, OnInit, Signal, ViewChild} from '@angular/core';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {AuthService} from "@services/auth/auth.service";
import {addIcons} from "ionicons";
import {add, createOutline, trash} from 'ionicons/icons';
import {FormsModule} from "@angular/forms";
import {AlertController} from "@ionic/angular";
import {toSignal} from "@angular/core/rxjs-interop";
import {Player} from "@interfaces/player";

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
    IonIcon,
    IonItemOptions,
    IonItemOption,
    IonItemSliding,
    IonButton,
    FormsModule
  ]
})
export class ProfileComponent {
  @ViewChild('inputName') inputName!: IonInput;
  public user: Signal<any>;
  protected players: Signal<Player[] | undefined>;

  constructor(
    private authService: AuthService,
    private alertController: AlertController,
  ) {
    this.user = toSignal(this.authService.user.asObservable());
    this.players = toSignal(this.authService.players.asObservable());
    addIcons({trash, createOutline, add});
  }

  ionViewDidEnter() {
    this.authService.getUser();
    this.authService.getPlayerList();
  }

  logout() {
    this.authService.logout();
  }

  async openNicknameWizard(type: 'new' | 'edit', old?: Player) {
    const alert = await this.alertController.create({
      header: 'Inserisci il valore',
      inputs: [
        {
          name: 'nickname',
          type: 'text',
          placeholder: 'Inserire un nickanme',
          value: type == 'new' ? '' : old!.name
        },
      ],
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel',
        },
        {
          text: 'Conferma',
          handler: (data: any) => {
            if (data.nickname.trim() !== '') {
              if (type == 'new') {
                this.authService.createPlayer(data.nickname)
              } else {
                this.authService.editPlayer(old!.id, data.nickname)
              }
            }
          },
        },
      ],
    });

    await alert.present();
  }

  deleteNickname(id: number) {
    this.authService.deletePlayer(id);
  }
}
