import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'profile',
        loadComponent: () =>
          import('@pages/tabs/profile/profile.component').then((m) => m.ProfileComponent),
      },
      {
        path: 'tournament-fees',
        loadComponent: () =>
          import('../tab2/tournament-fees-page.component').then((m) => m.TournamentFeesPage),
      },
      {
        path: 'tournaments',
        loadChildren: () =>
          import('@pages/tournaments-section/tournaments.routes').then((m) => m.routes),
      },
      {
        path: 'help',
        loadComponent: () =>
          import('../tab4/tab4-page.component').then((m) => m.Tab4Page),
      },
      {
        path: '',
        redirectTo: '/tabs/profile',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/profile',
    pathMatch: 'full',
  },
];
