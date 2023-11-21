import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facture } from 'src/app/models/Vente/facture.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  apiUrl:string=`${environment.ApiEndpoint}/facture`;
  constructor(private http:HttpClient) { }
  createFacture(facture:Facture){
    this.http.post(this.apiUrl,facture);
  }
}
