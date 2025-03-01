import {Component, HostListener} from '@angular/core';
import {IonApp, IonButton, IonRouterOutlet, Platform} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonButton],
})
export class AppComponent {
  deferredPrompt: any;
  showAndroidInstall = false;
  showIosInstall = false;
  isPWAInstalled = false;

  constructor(private platform: Platform) {}

  ngOnInit() {
    // Controlla se l'app è già installata
    this.isPWAInstalled = window.matchMedia('(display-mode: standalone)').matches || this.platform.is('capacitor');

    if (!this.isPWAInstalled) {
      this.detectPlatform();
    }

    window.addEventListener('beforeinstallprompt', (event: any) => {
      event.preventDefault();
      this.deferredPrompt = event;
      if (this.platform.is('android')) {
        this.showAndroidInstall = true;
      }
    });

    window.addEventListener('appinstalled', () => {
      console.log('PWA installata con successo!');
      this.showAndroidInstall = false;
      this.showIosInstall = false;
    });
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
