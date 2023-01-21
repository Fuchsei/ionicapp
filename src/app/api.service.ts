import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiKey:any='903d9038399b4cc4987c374634a68efe';
  
  constructor(public http:HttpClient) { }
 
  

  getNews(topic:any){
    return this.http.get(`http://newsapi.org/v2/everything?q=${topic}&from=2022-12-31&sortBy=publishedAt&apiKey=`+this.apiKey);
  }
}


