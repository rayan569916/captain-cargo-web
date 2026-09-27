import { Routes } from '@angular/router';

const SUFFIX = ' · Captain Cargo International';

export const routes: Routes = [
  {
    path: '',
    title: 'Captain Cargo International · Cargo from Saudi Arabia to the world',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    title: 'About us' + SUFFIX,
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'services',
    title: 'Services' + SUFFIX,
    loadComponent: () => import('./pages/services/services').then((m) => m.Services),
  },
  {
    path: 'mobile-app',
    title: 'Captain Logistic app' + SUFFIX,
    loadComponent: () => import('./pages/mobile-app/mobile-app').then((m) => m.MobileApp),
  },
  {
    path: 'cargo-tms',
    title: 'Cargo TMS for agents' + SUFFIX,
    loadComponent: () => import('./pages/cargo-tms/cargo-tms').then((m) => m.CargoTms),
  },
  {
    path: 'track',
    title: 'Track your shipment' + SUFFIX,
    loadComponent: () => import('./pages/track/track').then((m) => m.Track),
  },
  {
    path: 'contact',
    title: 'Contact us' + SUFFIX,
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: '**',
    title: 'Page not found' + SUFFIX,
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
