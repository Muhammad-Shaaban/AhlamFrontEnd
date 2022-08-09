import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/services/employee/employee-service.service';
declare var require: any;

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  formData = {
    id: '',
    Name: '',
    UserName: '',
    Email: '',
    PhoneNumber: '',
    Password: '',
    passcon: '',
    Type: ''
  };

  userID: any;

  constructor(private service: EmployeeServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("IsAuth") != 'true'){
      this.router.navigate(['/login']);
    }
    this.userID = this.route.snapshot.paramMap.get('id');

    this.service.getSingleUser(this.userID).subscribe(
      (res: any) => {
        this.formData.id = res.id;
        this.formData.Name = res.Name;
        this.formData.UserName = res.UserName;
        this.formData.Email = res.Email;
        this.formData.PhoneNumber = res.PhoneNumber;
        this.formData.Type = res.Type;

      }, err=>{
        console.log(err);
      }
    );
  }

  updateEmployee(){

      this.service.updateEmployee(this.formData).subscribe(
        (res:any)=>{
          const Swal = require("sweetalert2");
          Swal.fire({
            title: res.message,
            icon: 'success',
            position: 'top-right'
          }).then(function(){
            location.href = 'employees';
          });
        },
        err=>{
          console.log(err);
        }
      );
  }

}
