import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = []
  p:number = 1
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("IsAuth") != 'true'){
      this.router.navigate(['/login']);
    }
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      (res: any) => {
        for(let i = 0; i < res.length; i++){
          this.users.push(res[i]);
        }
      },

      err=>{
        console.log(err);
      }
    );
  }

}
