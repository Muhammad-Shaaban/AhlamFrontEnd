import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { Dream } from 'src/app/models/dream.model';

@Injectable({
  providedIn: 'root'
})

export class DreamService {
  url = AppModule.API_ENDPOINT + "/api/controlPanel/GetDreamsList?interpretered=";
  allDreamUrl = AppModule.API_ENDPOINT + "/api/controlPanel/GetDreamsDetailsList";
  deleteUrl =AppModule.API_ENDPOINT +  "/api/controlPanel/DeleteAllDreams";
  deleteSingleDreamUrl =AppModule.API_ENDPOINT + "/api/controlPanel/DeleteSingleDream";
  constructor(private http: HttpClient) { }
  dreams: any[] = [];
  allDreams: any[] = [];

  getAllDreams(dreamType: string){
    return  this.http.get<Dream[]>(this.url + dreamType).subscribe(
      (res: any) => {
        this.dreams = res;
      });
  }

  getAllDreamsDetails(){
    return  this.http.get(this.allDreamUrl).subscribe(
      (res: any) => {
        this.allDreams = res;
      });
  }



  deleteAllDreams(){
    return this.http.get(this.deleteUrl);
  }

  deleteSingleDream(id: number){
    return this.http.post(this.deleteSingleDreamUrl, id);
  }
}
