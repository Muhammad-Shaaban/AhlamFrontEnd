import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

   isAuth;

  constructor() { 
    this.isAuth = localStorage.getItem('IsAuth');
  }

  ngOnInit(): void {
  }
  
  logout(){
    localStorage.setItem('IsAuth', 'false');
    Swal.fire({
      title: 'تم تسجيل الخروج بنجاح',
      icon: 'success',
      position: 'top-right'
    }).then(function(){
      location.href = '/login';
    });
  }
}
