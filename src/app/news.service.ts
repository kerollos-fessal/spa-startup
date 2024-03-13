import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  getJsonPlaceHolder() :Observable<any>{
  return  this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }


  getNews() : Observable<any>{
  return  this.httpClient.get("https://newsapi.org/v2/top-headlines?country=eg&category=politics&apiKey=4c620c0bf1d542d78508f1705ecdc51b");
  }
}
