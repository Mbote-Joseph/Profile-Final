import { Routes } from '@angular/router';
import { Hero } from './components/profile/hero/hero';
import { Login } from './admin/login/login';
import { Dashboard } from './admin/dashboard/dashboard';

export const routes: Routes = [
  {path:'', component: Hero},
  {path:'profile', component: Hero},
  {path: 'login', component: Login},
  { path: 'admin', loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES) }

];
