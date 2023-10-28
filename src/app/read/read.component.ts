import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { State, Store } from '@ngxs/store';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {
// tutorials$:Observable<Tutorial>;
// constructor(private store:Store){
//   this.tutorials$=this.store.select(state=>state.tutorials.tutorials)
}

