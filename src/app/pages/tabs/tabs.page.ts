import {Component, EnvironmentInjector, inject} from '@angular/core';
import {IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs} from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {ellipse, square, triangle} from 'ionicons/icons';
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "@services/auth/auth.service";
import {Storage} from '@ionic/storage-angular'

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private storage: Storage
  ) {
    // const token = this.activatedRoute.snapshot.paramMap.get('id');
    // this.storage.set('auth', token);

    addIcons({triangle, ellipse, square});
  }
}
