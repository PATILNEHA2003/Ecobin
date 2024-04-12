import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{


  email : string = '';
  password : string = '';

  constructor(private auth : AuthService) {}

  ngOnInit(): void {
      
  }
  login() {
    console.log('Login method called');
    if (this.email == '') {
      alert('Please enter all the credentials');
      this.email = '';
      this.password = '';
      return;
    }
    if (this.password == '') {
      alert('Please enter all the credentials')
      return;
    }
    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}  