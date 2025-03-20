import { Routes } from '@angular/router';
import { MainPage } from './main.page';

export const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('@pages/tournaments-section/tournaments/tournaments-page.component').then((m) => m.TournamentsPage),
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('@pages/tournaments-section/signup/signup.page').then((m) => m.SignupPage),
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tournaments',
    pathMatch: 'full',
  },
];
