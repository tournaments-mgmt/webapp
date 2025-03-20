import {bootstrapApplication} from '@angular/platform-browser';
import {PreloadAllModules, provideRouter, RouteReuseStrategy, withPreloading} from '@angular/router';
import {IonicRouteStrategy, provideIonicAngular} from '@ionic/angular/standalone';

import {routes} from './app/app.routes';
import {AppComponent} from './app/app.component';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {importProvidersFrom, isDevMode} from '@angular/core';
import {provideServiceWorker} from '@angular/service-worker';
import {AuthInterceptor} from "./app/core/interceptors/auth.interceptor";
import {IonicStorageModule} from "@ionic/storage-angular";
import {Drivers} from "@ionic/storage";
import {AuthGuard} from "./app/core/guards/auth.guard";

bootstrapApplication(AppComponent, {
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    provideIonicAngular(),
    provideHttpClient(
      withInterceptors([
        AuthInterceptor
      ])
    ),
    importProvidersFrom(IonicStorageModule.forRoot({
      name: 'testdb',
      driverOrder: [Drivers.IndexedDB]
    })),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideServiceWorker('ngsw-worker.js', {
      enabled: true || isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
});
