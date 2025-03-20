import {Routes} from '@angular/router';
import {LoginPage} from "@pages/login/login.page";


export const routes: Routes = [
  {
    path: '',
    component: LoginPage,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@pages/login/login.page').then((m) => m.LoginPage),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('@pages/login/login.page').then((m) => m.LoginPage),
      }
    ],
  }
];
