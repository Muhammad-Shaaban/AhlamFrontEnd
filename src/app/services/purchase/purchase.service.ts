import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { Purchases } from 'src/app/models/purchases.model';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  AddNewPurchaeseurl = AppModule.API_ENDPOINT + "/api/ServicePath/AddServicePath";
  getAllPurchaeseUrl = AppModule.API_ENDPOINT + "/api/ServicePath/GetServicePaths";
  getSinglePurchaseUrl = AppModule.API_ENDPOINT + "/api/ServicePath/GetSingleServicePath";
  updatePurchaesUrl = AppModule.API_ENDPOINT + "/api/ServicePath/UpdateServicePath";
  deletePurchaseUrl = AppModule.API_ENDPOINT + "/api/ServicePath/DeleteServicePath";
  purchases: any[] = [];
  package: any
  constructor(private http: HttpClient) {}

  getAllPackages() {
    console.log(this.getAllPurchaeseUrl);
    return this.http.get(this.getAllPurchaeseUrl);
  }

  getSinglePackage(id: number){
    return this.http.get(this.getSinglePurchaseUrl + '?id=' + id);
  }

  addNewPackage(data: any){
    return this.http.post(this.AddNewPurchaeseurl, data)
  }


  updatePackage(formData: any){
    return this.http.post(this.updatePurchaesUrl, formData);
  }

  deletePackage(id: number){
    return this.http.post(this.deletePurchaseUrl + '?id=' + id, id);
  }
}
