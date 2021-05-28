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
    if (this.service.pdFormData.paymentDetailId == 0)
      this.insertRecord(pdForm);
    else
      this.updateRecord(pdForm);
  }

  // onSubmit(pdForm: NgForm) {
  //   this.service.postPaymentDetail().subscribe(
  //     res => {
  //       // reset Form
  //       this.resetForm(pdForm);
  //       // load scuccess message in toster
  //       this.toaster.success('Payment details saved successully', 'Payment Details Record');
  //       // service Refresh List
  //       this.service.refreshList();
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }

  // method 2
  // reset Form
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.pdFormData = new PaymentDetail();
  }

  // method 3
  // insert Records
  insertRecord(pdForm: NgForm) {
    var msg: string = "Submitted successfully";
    var resd: PaymentDetail = new PaymentDetail();
    this.service.postPaymentDetail()
      .subscribe(
        res => {
          this.resetForm(pdForm);
          //alert(JSON.stringify(res));
          resd = res as PaymentDetail;
          msg = `Submitted successfully, for Card Owner: ${resd.cardOwnerName}  and ID: ${resd.paymentDetailId}`;

          this.toaster.success(msg, 'Payment Detail Register');
          this.service.refreshList();
        },
        err => {
          console.log(err);
          this.toaster.error(JSON.stringify(err), 'Error on Payment detail');
        });
  }

  // method 4
  // udapte Records

  updateRecord(pdForm: NgForm) {
    this.service.putPaymentDetail()
      .subscribe(
        res => {
          this.resetForm(pdForm);
          this.toaster.info('Update successfully', 'Payment Detail Register');
          this.service.refreshList();
        },
        err => {
          console.log(err);
          this.toaster.error(JSON.stringify(err), 'Error on Payment Detail');
        }
      );
  }


}

