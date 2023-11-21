import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article/article';
import { ArticleService } from 'src/app/services/article/article.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
 allArticles!:Article[];
  constructor(private articleService:ArticleService){
  }
  ngOnInit(): void {
    this.loadArticle();
  }
  public isAddToArticleVisible: boolean=false ;
  modalVisible(){
   this.isAddToArticleVisible=!this.isAddToArticleVisible;
  }
  loadArticle(){
    this.articleService.getPagination(0,10).subscribe(data=>this.allArticles=data);
  }
  exportToExcel(): void {
    const table = document.getElementById('my-table'); // Replace 'my-table' with the ID of your table
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'BMSbyAmine.xlsx'); // You can change the file name as needed
  }

}
