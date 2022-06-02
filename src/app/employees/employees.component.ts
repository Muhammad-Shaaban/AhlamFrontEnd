import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../models/employee.model';
import Swal from 'sweetalert2';
import { EmployeeServiceService } from '../services/employee/employee-service.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare var require: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class EmployeesComponent implements OnInit {
  //employee: Employee[] = [];
  p = 1;
  isCreated: boolean = false
  constructor(
    public service: EmployeeServiceService,
    config: NgbModalConfig,
    private modalService: NgbModal, private router: Router
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  form = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
    type: new FormControl("Service_Provider"),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required]),
    phonenumber: new FormControl(null, [Validators.required]),
    PictureId: new FormControl(1)
  })

  ngOnInit(): void {
    if(localStorage.getItem("IsAuth") != 'true'){
      this.router.navigate(['/login']);
    }
    // this.service.employee ={
    //   name: '',
    //   username: '',
    //   password: '',
    this.service.getAllEmployees();
  }
  open(content: any) {
    this.modalService.open(content);
  }

  addNewEmployee(){
    if(this.form.valid){
      let employeeModel = Object.assign({},this.form.value)
      this.service.addNewEmployee(employeeModel).subscribe(res=>{
        this.service.getAllEmployees()
        this.isCreated = true
        // console.log(purchaseModel)
      },err=>{
        err = console.log(err)
      })
    }
  }

  DeleteEmployee(Id: string){
    const Swal = require("sweetalert2");

    Swal.fire({
      title: "هل أنت متاكد من حذف هذا الموظف ؟",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'لا',
      confirmButtonText: 'نعم'
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        this.service.deleteEmployee(Id).subscribe(
          (res:any) => {
            const Swal = require("sweetalert2");
            Swal.fire({
              title: res.message,
              icon: 'success',
              position: 'top-right'
            }).then(() =>{
              this.service.getAllEmployees();
            });
          }
        );
      }
    })
  }

  editEmployee(id: string){
    this.router.navigate(['/editEmployee/' + id]);
  }

  // submit(form: NgForm) {
  //   this.service.addNewEmployee().subscribe(res=>{
  //     this.service.getAllEmployees()
  //     console.log(res)
  //   },
  //   err=>{
  //     console.log(err)
  //   })
  // }
}
