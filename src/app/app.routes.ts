import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.routes').then( m => m.routes)
  },
  {
    path: 'tabs',
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
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full',
  },
  {
    path: '**', redirectTo: '/login'
  },
];
