import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/models/client/client.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
apiurl:string=`${environment.ApiEndpoint}/client`
  constructor(private http:HttpClient) { }
  getAllclient(){
   return this.http.get<Client[]>(this.apiurl);
  }
}
