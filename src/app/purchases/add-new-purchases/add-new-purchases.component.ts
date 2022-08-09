import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/services/purchase/purchase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-new-purchases',
  templateUrl: './add-new-purchases.component.html',
  styleUrls: ['./add-new-purchases.component.scss']
})
export class AddNewPurchasesComponent implements OnInit {
  formData = {
    NumberOfInterpreters: '',
    Price: ''
  };
  constructor(private service:PurchaseService) { }

  ngOnInit(): void {
  }

  addNewPurchaes(){
    this.service.addNewPackage(this.formData).subscribe(
      (res: any) => {
        Swal.fire({
          title: res.Message,
          icon: 'success',
          position: 'top-right',
          timer: 1500
        }).then(function(){
          location.href = 'purchases';
        });
      }
    );
  }

}
