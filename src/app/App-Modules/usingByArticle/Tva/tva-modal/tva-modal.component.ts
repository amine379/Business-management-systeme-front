import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tva-modal',
  templateUrl: './tva-modal.component.html',
  styleUrls: ['./tva-modal.component.css']
})
export class TvaModalComponent {
@Input() isAddToTvaVisible:boolean=false;
quitModal(){
  this.isAddToTvaVisible=false;
}
stopClosingModal(event:Event){
  event.stopPropagation();
}

}

