import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public service: PaymentDetailService,
    public toaster: ToastrService) { }

  ngOnInit(): void {
  }

  // methods

  // method 1
  //Save record to database
  onSubmit(pdForm: NgForm) {
    this.service.postPaymentDetail().subscribe(
      res => {
        // reset Form
        this.resetForm(pdForm);
        // load scuccess message in toster
        this.toaster.success('Payment details saved successully', 'Payment Details Record');
        // service Refresh List
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }

  // method 2
  // reset Form
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.pdFormData = new PaymentDetail();
  }
}

