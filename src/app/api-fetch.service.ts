import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiFetchService {

  constructor(private httpClient:HttpClient) { }

  getBooks(name:string){
    this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q='+name).subscribe(
      data=>{
        console.log(data);
      }
    );
  }
}
