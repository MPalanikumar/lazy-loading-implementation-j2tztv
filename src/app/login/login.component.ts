import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginDetails} from './login.interface';
@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public model: LoginDetails = {
    email:'',
    password:''
  };
  constructor(private router: Router) {}
  ngOnInit(){
    if(localStorage.getItem("isLoggedIn")){
      this.router.navigate(['/home']);
    }
  }
  login() {
    if(this.model.email === "vipin@mytestmail.com" && this.model.password === "12345") {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = 'https://lazy-loading-implementation.stackblitz.io';
    }
  }
}
