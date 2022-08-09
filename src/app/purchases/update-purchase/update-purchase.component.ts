import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/services/purchase/purchase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-purchase',
  templateUrl: './update-purchase.component.html',
  styleUrls: ['./update-purchase.component.scss']
})
export class UpdatePurchaseComponent implements OnInit {

  formData = {
    id: '',
    NumberOfInterpreters: '',
    Price: ''
  };
  PurchaesID: any;

  constructor(private route:ActivatedRoute, private service:PurchaseService) { }

  ngOnInit(): void {
    this.PurchaesID = this.route.snapshot.paramMap.get('id');

    this.service.getSinglePackage(this.PurchaesID).subscribe(
      (res: any) => {
        this.formData.id = res.SingleService.id;
        this.formData.NumberOfInterpreters = res.SingleService.NumberOfInterpreters;
        this.formData.Price = res.SingleService.Price;
      }
    );
  }

  updatePurchaes(){
    this.service.updatePackage(this.formData).subscribe(
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
