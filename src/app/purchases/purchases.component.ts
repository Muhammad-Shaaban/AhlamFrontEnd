import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Purchases } from '../models/purchases.model';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PurchaseService } from '../services/purchase/purchase.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss'],
})
export class PurchasesComponent implements OnInit {
  p = 1;
  NumberOfInterpreters = null
  Price= null
  Enabled= true
  isCreated: boolean = false
      // purchasesNumber= null
      // CreationDate= Date.now()
      // LastModificationDate= Date.now()
      // CreatorId= null
      // ModifierId= null
      // AttachmentId= null
      // CreatorName= null
  // purchases: any

  constructor(public service: PurchaseService, private modalService: NgbModal, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if(localStorage.getItem("IsAuth") != 'true'){
      this.router.navigate(['/login']);
    }


    this.service.getAllPackages().subscribe(
      (res: any) => {
        this.service.purchases = res.allService;
      }
    );
  }
  open(content: any) {
    this.modalService.open(content);
  }

  form = new FormGroup({
    NumberOfInterpreters: new FormControl(null, [Validators.required]),
      Price: new FormControl(null, [Validators.required]),
      Enabled: new FormControl(true),
  })
  editForm = new FormGroup({
      e_NumberOfInterpreters: new FormControl(null, [Validators.required]),
      e_Price: new FormControl(null, [Validators.required]),
      e_Enabled: new FormControl(true),
  })

  addNewPurchaes(){
    this.router.navigateByUrl('addNewPurchase');
  }

  updatePuarchese(id: number){
    this.router.navigate(['/updatePurchase/' + id]);
  }

  deletePuarchese(id: number){
    let DeleteConfirm = confirm("هل انت متاكد من حذف هذه الباقة ؟");
    if(DeleteConfirm){
      this.service.deletePackage(id).subscribe(
        (res: any) => {
          Swal.fire({
            title: res.Message,
            icon: 'success',
            position: 'top-right',
            timer: 1000
          }).then(() =>{
            this.service.getAllPackages().subscribe(
              (res: any) => {
                this.service.purchases = res.allService;
              }
            );
          });
        }
      );
    }
  }

}
