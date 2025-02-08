import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'registration-form',
    loadComponent: () => import('./pages/register/registration-form/registration-form.page').then( m => m.RegistrationFormPage)
  },
  {
    path: 'disclaimer',
    loadComponent: () => import('./pages/register/disclaimer/disclaimer.page').then( m => m.DisclaimerPage)
  }
];
