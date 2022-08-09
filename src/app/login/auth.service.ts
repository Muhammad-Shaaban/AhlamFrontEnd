import { AppModule } from './../app.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { AngularFireAuth } from '@angular/fire/compat/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLogedIn: any;
  loginUrl = AppModule.API_ENDPOINT + '/api/Account/Login';
  logoutUrl = AppModule.API_ENDPOINT + '/api/Account/Logout';
  constructor(private http: HttpClient) { }

  // login(email: any, password: any){
  //   return this.auth.signInWithEmailAndPassword(email, password)
  // }

  login(form: any){
    return this.http.post(this.loginUrl, form);
  }

  logout(){
    return this.http.get(this.logoutUrl);
  }
}
