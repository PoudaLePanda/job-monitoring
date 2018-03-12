import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Feathers } from '../../services/feathers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  messages: string[] = [];
  loginForm: FormGroup;
  loading = false;

  constructor(
    private feathers: Feathers,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    if (!this.loginForm.value.email || !this.loginForm.value.password) {
      return;
    }
    this.loading = true;
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    this.feathers.authenticate({
      strategy: 'local',
      email,
      password
    }).then(() => {
      this.router.navigate(['/']);
    }).catch(err => {
      this.messages.unshift('Wrong credentials!');
    });
  }

  signup() {
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    this.feathers.service('users')
      .create({ email, password })
      .then(() => this.messages.push('User created.'))
      .catch(err => this.messages.push('Could not create user!'));
  }
}
