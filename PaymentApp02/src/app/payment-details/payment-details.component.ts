import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetail } from '../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    //calling service method: refreshList
    this.service.refreshList();
  }


  //method 1
  //populateForm

  //method Begin
  populateForm(selectedRecord: PaymentDetail) {
    this.service.pdFormData = selectedRecord;

    this.service.pdFormData = Object.assign({}, selectedRecord);
  }

  //method2
  //OnDeleteRow

  // method Begin
  onDeleteRow(selectedPdID: number) {
    if (confirm('are sure to remove this recoord..?')) {

      this.service.deletePaymentDetail(selectedPdID)
        .subscribe(
          src => {
            this.service.refreshList();
            this.toastr.info('Record remove successfully', 'Payment Details Deletion');
          },
          err => {
            console.log(err);
            this.toastr.error(JSON.stringify(err), 'Payment Details Deletion')
          }
        );
    }
  }

  //method End

}
