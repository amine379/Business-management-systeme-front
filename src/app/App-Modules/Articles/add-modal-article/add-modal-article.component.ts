import { Component, Input, OnInit } from '@angular/core';
import { Agence } from 'src/app/models/agence/agence';
import { Fournisseur } from 'src/app/models/fournisseur/fournisseur';
import { Tva } from 'src/app/models/tva/tva';
import { Unite } from 'src/app/models/unite/unite';
import { AgenceService } from 'src/app/services/agence/agence.service';
import { FournisseurService } from 'src/app/services/fournisseur/fournisseur.service';
import { TvaService } from 'src/app/services/tva/tva.service';
import { UniteService } from 'src/app/services/unite/unite.service';

@Component({
  selector: 'app-add-modal-article',
  templateUrl: './add-modal-article.component.html',
  styleUrls: ['./add-modal-article.component.css']
})
export class AddModalArticleComponent implements OnInit {
  constructor(
    private fournisseurService:FournisseurService,
    private uniteService:UniteService,
    private tvaService:TvaService,
    private agenceService:AgenceService
    ){}
    agences!:Agence[];tvas!:Tva[];unites!:Unite[];fournisseurs!:Fournisseur[];
  ngOnInit(): void {
    this.fournisseurService.getAllFournisseur().subscribe((data)=>this.fournisseurs=data);
    this.agenceService.getAllAgences().subscribe((data)=>this.agences=data);
    this.tvaService.getAllTva().subscribe((data)=>this.tvas=data);
    this.uniteService.getAllUnite().subscribe((data)=>this.unites=data);
  }
  @Input() isAddToFournisseurVisible: boolean = false;
  quitModal(){
    this.isAddToFournisseurVisible=false;
}
stopClosingModal(event:Event){
  event.stopPropagation();
}

}
