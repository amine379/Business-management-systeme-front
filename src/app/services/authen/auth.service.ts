import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
//   proceedLogin(uncresed:any){
// return this.http.post("apimvfmv",uncresed);
//   }
}
