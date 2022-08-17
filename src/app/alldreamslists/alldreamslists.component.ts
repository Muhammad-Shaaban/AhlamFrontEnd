import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DreamService } from '../services/dream/dream.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alldreamslists',
  templateUrl: './alldreamslists.component.html',
  styleUrls: ['./alldreamslists.component.scss']
})
export class AlldreamslistsComponent implements OnInit {

  p = 1;

  constructor(public service: DreamService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("IsAuth") != 'true'){
      this.router.navigate(['/login']);
    }

    this.service.getAllDreamsDetails();
  }

  deleteSingleDream(id: number){
    var confirmMessage = confirm("هل أنت متاكد من عملية الحذف ؟");

    if(confirmMessage){
      this.service.deleteSingleDream(id).subscribe(
        res => {
          Swal.fire({
            title: "تم عملية الحذف بنجاح",
            icon: 'success',
            position: 'top-right',
            timer: 2000
          });

          //this.service.dreams.filter(d => d.DreamExplanatioId === id);
          this.service.getAllDreams('all');
        },

        err => {
          Swal.fire({
            title: "حدث خطأ أثناء عملية الحذف",
            icon: 'error',
            position: 'top-right',
            timer: 2000
          });

          return false;
        }
      );
    }
  }

}
