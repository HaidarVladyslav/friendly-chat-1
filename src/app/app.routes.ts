import { Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, AuthGuard } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['chat']);

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/login-page/login-page.component'),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToHome },
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login-page/login-page.component'),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToHome },
  },
  {
    path: 'chat',
    loadComponent: () => import('./pages/chat-page/chat-page.component'),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
];
