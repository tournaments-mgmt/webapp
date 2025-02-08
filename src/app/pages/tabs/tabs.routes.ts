import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
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
        loadComponent: () =>
          import('../tab3/tournaments-page.component').then((m) => m.TournamentsPage),
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
