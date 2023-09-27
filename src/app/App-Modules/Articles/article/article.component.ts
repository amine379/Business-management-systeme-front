import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  public isAddToArticleVisible: boolean=false ;
  modalVisible(){
   this.isAddToArticleVisible=!this.isAddToArticleVisible;
  }
  exportToExcel(): void {
    const table = document.getElementById('my-table'); // Replace 'my-table' with the ID of your table
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'BMSbyAmine.xlsx'); // You can change the file name as needed
  }
}
