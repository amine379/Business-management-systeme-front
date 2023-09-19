import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tva } from 'src/app/models/tva/tva';

@Injectable({
  providedIn: 'root'
})
export class TvaService {

  constructor(private http:HttpClient) { }
  apiUrl:string='http://localhost:8080/api/tva';
  getAllTva(): Observable<Tva[]>{
    return this.http.get<Tva[]>(this.apiUrl);
  }
}
