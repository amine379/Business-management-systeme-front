import { Component, OnInit } from '@angular/core';
import { ModePayment } from 'src/app/models/Vente/modePayment.models';
import { Agence } from 'src/app/models/agence/agence';
import { Tva } from 'src/app/models/tva/tva';
import { Unite } from 'src/app/models/unite/unite';
import { AgenceService } from 'src/app/services/agence/agence.service';
import { TvaService } from 'src/app/services/tva/tva.service';
import { UniteService } from 'src/app/services/unite/unite.service';
import { ModePaymentService } from 'src/app/services/vente/mode-payment.service';

@Component({
  selector: 'app-articledes',
  templateUrl: './articledes.component.html',
  styleUrls: ['./articledes.component.css']
})
export class ArticledesComponent implements OnInit {
  isAddModalAgenceVisible:boolean=false;
  isAddToTvaVisible:boolean=false;
constructor(
  private uniteService:UniteService,
  private tvaService:TvaService,
  private agenceService:AgenceService,
  private modepaymentService:ModePaymentService){}
unites!:Unite[];tvas!:Tva[];agences!:Agence[];modes!:ModePayment[];
ngOnInit(): void {
  this.uniteService.getAllUnite().subscribe((data)=>this.unites=data);
  this.tvaService.getAllTva().subscribe((data)=>this.tvas=data);
  this.loadAgences();
  this.loadModePayment();
}
loadAgences(){
this.agenceService.getAllAgences().subscribe(data=>this.agences=data);
}
loadModePayment(){
  this.modepaymentService.getAllPaymenntMode().subscribe(data=>this.modes=data);
}

}
