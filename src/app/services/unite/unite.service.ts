import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Unite } from 'src/app/models/unite/unite';

@Injectable({
  providedIn: 'root'
})
export class UniteService {
  apiUrl='http://localhost:8080/api/unite'
  constructor(private http:HttpClient) { }
  getAllUnite(){
    return this.http.get<Unite[]>(this.apiUrl);
  }
}
