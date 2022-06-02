import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { StatisticsService } from '../services/statistics.service';
declare var require: any;


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor( public service: StatisticsService, private router: Router) {

  }

  ngOnInit(): void {
    //this.service.getAllStatistics();
    if(localStorage.getItem("IsAuth") != 'true'){
      this.router.navigate(['/login']);
    }

    this.service.getAllStatistics();
  }


  sendNotificationToAllUsers(){
    const Swal = require("sweetalert2")
    Swal.fire({
      title: 'أرسل إشعار جماعي للمستخدمبن',
      input: 'text',
      customClass: {
        validationMessage: 'my-validation-message'
      },
      preConfirm: (value: any) => {
        if (!value) {
          Swal.showValidationMessage(
            '<i class="fa fa-info-circle"></i> يرجى إدخال نص'
          )
        }
      }
    })
  }

  sendNotificationToAllEmployees(){
    const Swal = require("sweetalert2")
    Swal.fire({
      title: 'أرسل إشعار جماعي للموظفين',
      input: 'text',
      customClass: {
        validationMessage: 'my-validation-message'
      },
      preConfirm: (value: any) => {
        if (!value) {
          Swal.showValidationMessage(
            '<i class="fa fa-info-circle"></i> يرجى إدخال نص'
          )
        }
      }
    })
  }

}
