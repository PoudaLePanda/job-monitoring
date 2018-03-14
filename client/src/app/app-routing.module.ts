import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProxyComponent } from './components/proxy.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MonitorComponent } from './components/monitor/monitor.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

/*
  Our app's routes.
  If you don't know what this means, check https://angular.io/docs/ts/latest/guide/router.html
 */
const routes: Routes = [
  {
    path: '',
    component: ProxyComponent,
    children: [
      // { path: '', redirectTo: 'welcome(sidenav:login)', pathMatch: 'full' },
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: '',
        outlet: 'sidenav',
        component: LoginComponent
      },
      {
        path: 'dashboard',
        component: MonitorComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        outlet: 'sidenav',
        component: ProfileComponent,
        canActivate: [AuthGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
