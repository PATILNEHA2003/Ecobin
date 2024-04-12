import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  //login method
  login(email : string , password : string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['dashboard']); // Corrected path
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']); // Corrected path
    })
  } 

  //register method
  register(email: string, password: string){
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      alert("Registration Successfull");
      this.router.navigate(['/login']); // Corrected path
      
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']); // Corrected path
    })
  } 

  //log out
  logout(){
    this.fireauth.signOut().then(() => {
localStorage.removeItem('token');
this.router.navigate(['/login']);
    }, err =>{
alert(err.message);
    })
  }
}
