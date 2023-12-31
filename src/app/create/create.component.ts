import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTutorial } from '../action/tutorial.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
constructor(private store:Store){
}
addTutorial(name:string,url:string){
  this.store.dispatch(new AddTutorial({name:name,url:url}))}
removeTutorial(){}
}
