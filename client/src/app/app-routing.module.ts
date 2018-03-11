import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobComponent } from './components/job/job.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';

/*
  Our app's routes.
  If you don't know what this means, check https://angular.io/docs/ts/latest/guide/router.html
 */
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'job'
      },
      {
        path: 'job',
        component: JobComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
