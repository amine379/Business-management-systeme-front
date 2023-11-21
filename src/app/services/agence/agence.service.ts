import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Agence } from 'src/app/models/agence/agence';
@Injectable({
  providedIn: 'root'
})
export class AgenceService {
apiUrl='http://localhost:8080/api/agence';
  constructor(private http:HttpClient) { }
  
  getAllAgences(): Observable<Agence[]>{
    return this.http.get<Agence[]>(this.apiUrl)
  }
}
