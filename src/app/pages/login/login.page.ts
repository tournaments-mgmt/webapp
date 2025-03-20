import {Component, Signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {AuthService} from "@services/auth/auth.service";
import {Router} from "@angular/router";
import {toSignal} from "@angular/core/rxjs-interop";
import {Storage} from "@ionic/storage-angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonInput, IonButton, IonCard, IonCardContent]
})
export class LoginPage {
  private readonly isAuthenticated: Signal<boolean | undefined>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: Storage
  ) {
    this.isAuthenticated = toSignal(this.authService.isAuthenticated.asObservable());
  }

  async login(token: any) {
    this.authService.checkoutToken(token.toString());
    console.warn('LoginPage.login.login');
    if (this.isAuthenticated()) {
      await this.storage.set('auth', token);
      await this.router.navigate(['/tabs'])
    }
  }

}
