import { Component, Input, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/models/fournisseur/fournisseur';
import { FournisseurService } from 'src/app/services/fournisseur/fournisseur.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit{
public isAddToFournisseurVisible: boolean=false ;
searchFournissuer:string='';
listOfFournisseurs!:Fournisseur[];
constructor(private fournisseurService:FournisseurService){}
  ngOnInit(): void {
    this.loadList();
  }
  loadList(){
    this.fournisseurService.getAllFournisseur().subscribe((data)=>this.listOfFournisseurs=data);
  }

modalVisible(){
 this.isAddToFournisseurVisible=!this.isAddToFournisseurVisible;
}
filterFournisseur(){
  if(this.searchFournissuer!=''){
    this.listOfFournisseurs=this.listOfFournisseurs.filter(item=>item.nom.toLowerCase().includes(this.searchFournissuer.toLowerCase()));
  }
  else 
  this.loadList();
}
}
