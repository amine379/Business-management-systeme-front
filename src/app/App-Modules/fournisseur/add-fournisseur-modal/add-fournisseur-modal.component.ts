import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-fournisseur-modal',
  templateUrl: './add-fournisseur-modal.component.html',
  styleUrls: ['./add-fournisseur-modal.component.css']
})
export class AddFournisseurModalComponent {
  dataTypes:string[] = ['Apple', 'Orange', 'Banana'];
  @Input() isAddToFournisseurVisible: boolean = false;
  quitModal(){
    this.isAddToFournisseurVisible=false;
}
stopClosingModal(event:Event){
  event.stopPropagation();
}}
