import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  
import { Fournisseur } from 'src/app/models/fournisseur/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
apiUrl:string='http://localhost:8080/api/fournisseur';
  constructor(private http:HttpClient) { }
  createFournisseur(fournisseurRequest:Fournisseur):Observable<object>{
    
return this.http.post(`${this.apiUrl}`,fournisseurRequest);

  }
  getAllFournisseur() {
 return this.http.get<Fournisseur[]>(this.apiUrl);
  }
  getFournisseurByNom(nom:string): Observable<any>{
    return this.http.get<Fournisseur>(`${this.apiUrl}/${nom}`)
  }
}
