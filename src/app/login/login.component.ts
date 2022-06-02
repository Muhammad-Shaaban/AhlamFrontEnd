import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any
  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl("", Validators.required )
    });

    if(localStorage.getItem("IsAuth") == 'true'){
      this.router.navigate(['/']);
    }
  }

  signedIn(form: NgForm){
    this.service.login(form.value).subscribe(
      (res: any) => {
        if(res.isAuth){
          Swal.fire({
            title: res.Message,
            icon: 'success',
            position: 'top-right',
            timer: 1500
          }).then(function(){
            location.href = 'home';
          });

          localStorage.setItem('IsAuth', "true");
        }

        else{
          Swal.fire({
            title: res.Message,
            icon: 'error',
            position: 'top-right',
            timer: 1500
          });
        }
      },
      err=>{
        console.log(err);
      }
    );
  }

}
