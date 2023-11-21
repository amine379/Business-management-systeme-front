import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModePayment } from 'src/app/models/Vente/modePayment.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModePaymentService {

  constructor(private http:HttpClient) { }
  apiUrl=`${environment.ApiEndpoint}/modepayment`
  getAllPaymenntMode(){
    return this.http.get<ModePayment[]>(this.apiUrl);
  }
}
