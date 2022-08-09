import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = AppModule.API_ENDPOINT + '/api/controlPanel/GetUserInfo';
  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get(this.url);
  }
}
