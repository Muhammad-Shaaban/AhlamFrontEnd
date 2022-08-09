import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideNavigation: EventEmitter<any> = new EventEmitter()
  isLoggedIn$!: Observable<boolean>;
  isAuth;
  constructor() {
    this.isAuth = localStorage.getItem('IsAuth');
   }

  ngOnInit(): void {
  }

  toggleSideNav(){
    this.toggleSideNavigation.emit();
  }

  logout(){
    localStorage.setItem('IsAuth', 'false');
    Swal.fire({
      title: 'تم تسجيل الخروج بنجاح',
      icon: 'success',
      position: 'top-right'
    }).then(function(){
      location.href = '/Ahlam2/login';
    });
  }

}
