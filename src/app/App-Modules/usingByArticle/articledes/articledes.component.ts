import { Component, OnInit } from '@angular/core';
import { Tva } from 'src/app/models/tva/tva';
import { Unite } from 'src/app/models/unite/unite';
import { TvaService } from 'src/app/services/tva/tva.service';
import { UniteService } from 'src/app/services/unite/unite.service';

@Component({
  selector: 'app-articledes',
  templateUrl: './articledes.component.html',
  styleUrls: ['./articledes.component.css']
})
export class ArticledesComponent implements OnInit {
constructor(
  private uniteService:UniteService,
  private tvaService:TvaService){}
unites!:Unite[];tvas!:Tva[];
ngOnInit(): void {
  this.uniteService.getAllUnite().subscribe((data)=>this.unites=data);
  this.tvaService.getAllTva().subscribe((data)=>this.tvas=data);
}


}
