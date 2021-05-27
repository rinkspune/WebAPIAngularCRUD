import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService,
    private toaster:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
    //alert('refreshList called form payment details component');
  }

  populateForm(selectedRecord: PaymentDetail) {
    // this.service.formData = selectedRecord;
    this.service.formData = Object.assign({}, selectedRecord);
  }

  _OnDeleteRow(selectedPDId: number) {
    alert('  OnDeleteRow called' + selectedPDId);
  }


  OnDeleteRow(pdID: number) {
    if (confirm("Are sure to delete this record?")) {
      this.service.deletePaymentDetail(pdID).subscribe(
        res => {
          this.toaster.error('Deleted scuccessfully', 'Payment Detail Register');
          this.service.refreshList();
        },
        err => { console.log(err); }
      );
    }
  }



}