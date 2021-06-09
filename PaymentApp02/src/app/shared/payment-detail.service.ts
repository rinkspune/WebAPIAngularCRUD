import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) { }

  //Variable Declaration
  //object
  pdFormData: PaymentDetail = new PaymentDetail();

  // base url
  readonly baseURL = 'http://localhost:23495/api/paymentdetail';
  apimessage: String = '';
  //list
  listPaymentDetail!: PaymentDetail[];


  // Methods CURD Begins

  //HTTP POST
  postPaymentDetail() {
    // alert('value of paymentDetailId: ' + this.pdFormData.paymentDetailId);
    // if (this.pdFormData.paymentDetailId != 0)
    //   this.pdFormData.paymentDetailId = 0;
    return this.http.post(this.baseURL, this.pdFormData);
  }


  // HTTP PUT
  putPaymentDetail() {
    return this.http.put(`${this.baseURL}/${this.pdFormData.paymentDetailId}`, this.pdFormData);
  }

  // HTTP DELETE
  deletePaymentDetail(selectedID: number) {
    return this.http.delete(`${this.baseURL}/${selectedID}`);
  }
  // Methods CURD Ends


  // Method to Fetch Record
  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(
        res => this.listPaymentDetail = res as PaymentDetail[],
        err => {
          // this.apimessage = "paymentdetail:" + JSON.stringify(err);
          // alert("paymentdetail");
          this.apimessage = "paymentdetail: " + err.status;
          this.apimessage += " ok: " + err.ok;
          this.apimessage = " ok: " + err.ok;

          console.log(err);
          console.log(JSON.stringify(err));
          //alert(JSON.stringify(err));
        }
      );
  }

}
