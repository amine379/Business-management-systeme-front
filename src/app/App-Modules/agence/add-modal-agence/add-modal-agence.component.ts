import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-modal-agence',
  templateUrl: './add-modal-agence.component.html',
  styleUrls: ['./add-modal-agence.component.css']
})
export class AddModalAgenceComponent {
@Input() isAddModalAgenceVisible:boolean=false;
quitModal(){
 this.isAddModalAgenceVisible=false; 
}
stopClosingModal(event:Event){
  event.stopPropagation();
}
onSubmit(){

}
}
