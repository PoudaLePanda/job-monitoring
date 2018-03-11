import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Feathers } from '../../services/feathers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  jobs: string[] = [];

  constructor(private feathers: Feathers, private router: Router) {}

  login(email: string, password: string) {
    if (!email || !password) {
      this.jobs.push('Incomplete credentials!');
      return;
    }

    // try to authenticate with feathers
    this.feathers.authenticate({
      strategy: 'local',
      email,
      password
    })
      // navigate to base URL on success
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch(err => {
        this.jobs.unshift('Wrong credentials!');
      });
  }

  signup(email: string, password: string) {
    this.feathers.service('users')
      .create({email, password})
      .then(() => this.jobs.push('User created.'))
      .catch(err => this.jobs.push('Could not create user!'))
    ;
  }
}
