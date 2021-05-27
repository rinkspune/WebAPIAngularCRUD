import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})


export class PaymentDetailService {

  constructor(private http: HttpClient) { }

  formData: PaymentDetail = new PaymentDetail();
  readonly baseURL = "http://localhost:23495/api/PaymentDetail";
  listPaymentDetail!: PaymentDetail[];

  // implimentation of onSubmitMethodCall
  postPaymentDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putPaymentDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`, this.formData);
  }

  deletePaymentDetail(selectedPDId: number) {
    return this.http.delete(`${this.baseURL}/${selectedPDId}`);
  }


  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.listPaymentDetail = res as PaymentDetail[]);
  }

}
