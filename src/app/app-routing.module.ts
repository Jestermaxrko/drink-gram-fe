import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home as HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService] 
  },
  { 
    path: 'auth',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
