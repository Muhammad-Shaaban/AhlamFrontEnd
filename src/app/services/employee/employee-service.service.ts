import { Injectable } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { HttpClient } from '@angular/common/http';
import { AppModule } from 'src/app/app.module';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  employeeList: any[] = [];
  employee: any;
  url = AppModule.API_ENDPOINT + "/api/controlPanel/GetEmployeesList";
  addNewUrl = AppModule.API_ENDPOINT + "/api/Account/Register";
  singleUserUrl = AppModule.API_ENDPOINT + "/api/Account/GetSingleUser?Id=";
  updateUserUrl = AppModule.API_ENDPOINT + "/api/Account/UpdateSingleUser";
  deleteUserUrl = AppModule.API_ENDPOINT + "/api/Account/DeleteSingleUser?Id=";

  constructor(private http: HttpClient) { }

  getAllEmployees(){
      this.http.get<Employee[]>(this.url).toPromise()
      .then((res) => {
        this.employeeList = res
      });
  }

  getSingleUser(Id:any){
    return this.http.get(this.singleUserUrl + Id);
  }

  addNewEmployee(data: any){
    return this.http.post(this.addNewUrl, data);
  }

  updateEmployee(formData: any){
    return this.http.post(this.updateUserUrl, formData);
  }

  deleteEmployee(Id: string){
    return this.http.post(this.deleteUserUrl + Id, Id);
  }
}
