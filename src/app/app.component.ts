import {Component, HostListener} from '@angular/core';
import {IonApp, IonButton, IonRouterOutlet, Platform} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonButton],
})
export class AppComponent {
  deferredPrompt: any;
  showInstallButton = false;
  isStandalone = false;

  constructor(private platform: Platform) {}

  ngOnInit() {
    // Controlla se l'app è già installata (utile per iOS e Android)
    this.isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      this.platform.is('capacitor');

    alert(this.isStandalone)

    window.addEventListener('beforeinstallprompt', (event: any) => {
      event.preventDefault();
      this.deferredPrompt = event;
      this.showInstallButton = true;
    });

    window.addEventListener('appinstalled', () => {
      console.log('PWA installata con successo!');
      this.showInstallButton = false;
    });
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
        this.showInstallButton = false;
      });
    }
  }
}
