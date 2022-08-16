import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dream } from '../models/dream.model';
import Swal from 'sweetalert2';
import { DreamService } from '../services/dream/dream.service';

@Component({
  selector: 'app-dreams',
  templateUrl: './dreams.component.html',
  styleUrls: ['./dreams.component.scss']
})
export class DreamsComponent implements OnInit {

  constructor(public service: DreamService, private router: Router) { }
  // dreams: Dream[]= []
  p = 1;
  ngOnInit(): void {
    if(localStorage.getItem("IsAuth") != 'true'){
      this.router.navigate(['/login']);
    }

    this.service.getAllDreams('all');
  }


  getAll(dreamsType: string){
    this.service.getAllDreams(dreamsType);
  }

  deleteDreams(){
    var confirmMessage = confirm("هل أنت متاكد من عملية الحذف ؟");
    if(confirmMessage){
      this.service.deleteAllDreams().subscribe(
        res => {
          Swal.fire({
            title: "تم عملية الحذف بنجاح",
            icon: 'success',
            position: 'top-right',
            timer: 2000
          });

          this.service.getAllDreams('all');

          return true
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
