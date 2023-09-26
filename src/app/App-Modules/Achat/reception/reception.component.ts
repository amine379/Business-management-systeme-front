import { Component, OnInit } from '@angular/core';
import { Agence } from 'src/app/models/agence/agence';
import { Article } from 'src/app/models/article/article';
import { Fournisseur } from 'src/app/models/fournisseur/fournisseur';
import { AgenceService } from 'src/app/services/agence/agence.service';
import { ArticleService } from 'src/app/services/article/article.service';
import { FournisseurService } from 'src/app/services/fournisseur/fournisseur.service';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {
  constructor(private articleService:ArticleService,
    private fournisseurService:FournisseurService,
    private agenceservice:AgenceService){}

   listFournisseur!:Fournisseur[];
  articles!:Article[];
  fournisseurs!:Fournisseur[];
  fournisseursList!:Fournisseur[];
  fournisseurSearched:string='';
  fournisseurChosed!:Fournisseur;
  agences!:Agence[];
  

ngOnInit(): void {
  this.getAgences();
  this.getFournisseurs();
  this.fournisseurChosed=new Fournisseur('',5,true,'d',22,'alaba',[]);
}
getFournisseurs(){this.fournisseurService.getAllFournisseur().subscribe((data)=>this.fournisseurs=data);}
getAgences(){this.agenceservice.getAllAgences().subscribe((data)=>this.agences=data);}

filtreFournisseur(name:string){
  if(this.fournisseurSearched!=''){
    this.fournisseursList=this.fournisseurs.filter(item=>item.nom.toLowerCase().includes(this.fournisseurSearched.toLowerCase()));
  }
  
}
choseFournisseur(fournisseur:Fournisseur){
  this.fournisseurSearched='';
this.fournisseurChosed=fournisseur;


}
}
