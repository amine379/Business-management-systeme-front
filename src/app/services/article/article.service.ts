import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  apiUrl='http://localhost:8080/api/article';

  constructor(private http:HttpClient) { }
  getAllArticles():Observable<Article[]>{
    return this.http.get<Article[]>(this.apiUrl);
  }
  getPagination(offset: number, pageSize: number): Observable<any> {
    const url = `${this.apiUrl}/pagination/${offset}/${pageSize}`;
    return this.http.get(url);
  }
}
