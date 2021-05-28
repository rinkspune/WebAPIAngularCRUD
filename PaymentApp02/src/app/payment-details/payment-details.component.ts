import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetail } from '../shared/payment-detail.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService) { }

  ngOnInit(): void {
    //calling service method: refreshList
    this.service.refreshList();
  }


  //method Begin
  populateForm(selectedRecord: PaymentDetail) {
    // this.service.pdFormData = selectedRecord;
    this.service.pdFormData = Object.assign({}, selectedRecord);
  }
  //method 1
  //populateForm


  //method2
  //OnDeleteRow


  //method End

}
