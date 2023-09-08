import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent {
public isAddToFournisseurVisible: boolean=false ;
modalVisible(){
 this.isAddToFournisseurVisible=!this.isAddToFournisseurVisible;
}
}
