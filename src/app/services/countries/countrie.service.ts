import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountrieService {

  constructor(private http:HttpClient) { }
  private apiUrl = 'https://restcountries.com/v3.1/all';
  getCountrie(): Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
