import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceptionService {
  apiUrl:string='http://localhost:8080/api/article';
  constructor(private http:HttpClient) { }
  // createArticle():Observable<object>{
  //   return this.http.post(`${this.apiUrl}`,fournisseurRequest);
  // }
}
