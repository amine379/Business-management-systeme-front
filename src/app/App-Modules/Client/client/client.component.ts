import { Component ,OnInit} from '@angular/core';
import { Client } from 'src/app/models/client/client.models';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{
  isAddToClientVisible:boolean=false;
  allClient!:Client[];
  constructor(private clientService:ClientService){

  }
ngOnInit(): void {
  this.loadAllClient();
}
  modalVisible(){
    
this.isAddToClientVisible=!this.isAddToClientVisible;
  }

  loadAllClient(){
this.clientService.getAllclient().subscribe(data=>this.allClient=data)
  }
}
