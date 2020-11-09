import { Component,Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-thumb',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.css']
})
export class ThumbComponent implements OnInit {
  @Input() titleID: string;

  private readonly URL = 'http://www.omdbapi.com/?i=';
  title: any;
  img:any;
  resolveItems(id): Observable<any> {

    return this.http.get(this.URL+id+'&apikey=f7df6a0c');

  }
  // getTrailer(title): Observable<any> {
  //   var re = / /gi;
  //    var str = this.title + "trailer";
  //   str = str.replace(re, "%20"); 
  //   console.log(str);
  //   return this.http.get(this.vURL+str+'&key=AIzaSyCCUrQf4lAT8UH_YFdJok2zM1bnXo8W9Xc');

  // }
  constructor(private http: HttpClient) {

   }

   ngOnInit():void{

  }

  ngOnChanges(): void {
    this.resolveItems(this.titleID).subscribe(data=>{
      this.title= data["Title"];
      this.img= data["Poster"];

    });

  }

}
