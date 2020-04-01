import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { ApiFetchService } from '../api-fetch.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(private serviceObj:ApiFetchService,private httpClient :HttpClient) { }
  book:any;
  name:any;
  array:any;
 // url:any = "https://www.googleapis.com/books/v1/volumes?q=";
  

  sendData(){
 //   response:any = UrlfetchApp.fetch(url);
// this.url=this.url+this.book;
  this.name=this.book.value;
  console.log(this.name.isbnNo);
  //  this.serviceObj.getBooks(this.name);

    this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q='+this.name.isbnNo).subscribe(
      data=>{
        
        this.array=data;
      //  console.log(this.array);
        console.log(this.array.items[0]);
        console.log(this.array.items[0].volumeInfo.title);
        console.log(this.array.items[0].volumeInfo.authors[0]);
        console.log(this.array.items[0].volumeInfo.description);
        console.log(this.array.items[0].volumeInfo.publisher);
        console.log(this.array.items[0].volumeInfo.publishedDate);
        console.log(this.array.items[0].volumeIcontentVersionnfo.categories[0]);
        console.log(this.array.items[0].volumeInfo.contentVersion);

      //  title authors description publisher publishedDate categories  isbn_type1 isbnNo1 isbn_type2 isbnNo2 smallThumbnail thumbnail amount currencyCode

        console.log(this.array.items[0].volumeInfo.industryIdentifiers[0].type);
        console.log(this.array.items[0].volumeInfo.industryIdentifiers[0].identifier);
        console.log(this.array.items[0].volumeInfo.industryIdentifiers[1].type);
        console.log(this.array.items[0].volumeInfo.industryIdentifiers[1].identifier);

        console.log(this.array.items[0].volumeInfo.imageLinks.smallThumbnail);
        console.log(this.array.items[0].volumeInfo.imageLinks.thumbnail);

        console.log(this.array.items[0].saleInfo.listPrice.amount);
        console.log(this.array.items[0].saleInfo.listPrice.currencyCode);


      }
    );
   // console.log( "hello"+this.a.isbnNo);
  }

  ngOnInit() {
    this.book = new FormGroup({
      isbnNo: new FormControl('')
    });
  }

}
