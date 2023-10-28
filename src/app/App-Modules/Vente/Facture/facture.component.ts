import { Component } from '@angular/core';
import { Fournisseur } from 'src/app/models/fournisseur/fournisseur';
import { FournisseurService } from 'src/app/services/fournisseur/fournisseur.service';


@Component({
  selector: 'facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent {
  products!: Fournisseur[];

  selectedProducts!: Fournisseur;

  constructor(private fournisseurService:FournisseurService ) {}

  ngOnInit() {
      this.fournisseurService.getAllFournisseur().subscribe(data=>this.products=data)
  } 
}
