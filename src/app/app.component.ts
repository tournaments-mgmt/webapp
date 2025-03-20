import {Component, OnInit, Signal} from '@angular/core';
import {IonApp, IonRouterOutlet, Platform} from '@ionic/angular/standalone';
import {ActivatedRoute, Router} from "@angular/router";
import {Storage} from "@ionic/storage-angular";
import {AuthService} from "@services/auth/auth.service";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  deferredPrompt: any;
  showAndroidInstall = false;
  showIosInstall = false;
  isPWAInstalled = false;
  private readonly isAuthenticated: Signal<boolean | undefined>;

  constructor(
    private activeRoute: ActivatedRoute,
    private platform: Platform,
    private storage: Storage,
    private authService: AuthService,
    private router: Router,
  ) {
    this.isAuthenticated = toSignal(this.authService.isAuthenticated.asObservable());
  }

  async ngOnInit() {
    await this.storage.create();
    await this.handleRedirect();

    // Controlla se l'app è già installata
    // this.isPWAInstalled = window.matchMedia('(display-mode: standalone)').matches || this.platform.is('capacitor');
    //
    // if (!this.isPWAInstalled) {
    //   this.detectPlatform();
    // }
    //
    // window.addEventListener('beforeinstallprompt', (event: any) => {
    //   alert(event)
    //   event.preventDefault();
    //   this.deferredPrompt = event;
    //   if (this.platform.is('android')) {
    //     this.showAndroidInstall = true;
    //   }
    // });
    //
    // window.addEventListener('appinstalled', () => {
    //   console.log('PWA installata con successo!');
    //   this.showAndroidInstall = false;
    //   this.showIosInstall = false;
    // });
  }

  async handleRedirect() {
    const token = await this.storage.get('auth');
    this.authService.checkoutToken(token);
    if (!this.isAuthenticated() && !['/login', '/register'].includes(window.location.pathname)) {
      await this.router.navigateByUrl('/login');
    } else if(this.isAuthenticated() && ['/login', '/register'].includes(window.location.pathname)) {
      await this.router.navigateByUrl('/tabs');
    }
  }

  detectPlatform() {
    if (this.platform.is('ios') && !this.isPWAInstalled) {
      this.showIosInstall = true; // Mostra il messaggio per iOS
    }
  }

  installPWA() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Utente ha accettato l’installazione');
        } else {
          console.log('Utente ha rifiutato l’installazione');
        }
        this.deferredPrompt = null;
        this.showAndroidInstall = false;
      });
    }
  }
}
