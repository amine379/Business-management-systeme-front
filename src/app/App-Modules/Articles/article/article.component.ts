import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  public isAddToFournisseurVisible: boolean=false ;
  modalVisible(){
   this.isAddToFournisseurVisible=!this.isAddToFournisseurVisible;
  }
}
