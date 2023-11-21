import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  venteExpanded:boolean=false;
  achatExpanded:boolean=false;
  articleExpendend:boolean=false;
constructor(){
}
}
