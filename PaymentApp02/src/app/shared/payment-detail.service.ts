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

  //list
  listPaymentDetail!: PaymentDetail[];


  // Methods CURD Begins

  //HTTP POST
  postPaymentDetail() {
    return this.http.post(this.baseURL, this.pdFormData);
  }


  // HTTP PUT
  putPaymentDetail(selectedID: number) {
    return this.http.put(`${this.baseURL}/${selectedID}`, this.pdFormData);
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
        res => this.listPaymentDetail = res as PaymentDetail[]
      );
  }

}
