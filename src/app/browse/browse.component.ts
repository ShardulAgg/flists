import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  ngOnInit(): void {
    this.cond=false;
  }
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  imdbRating =5.0;
  //mat forms
  genres = new FormControl();
  genresList: string[] = ['action', 'comedy', 'crime', 'adventure', 'drama', 'horror'];

  selectedType: string;

  types: Type[] = [
    {value: 'tvSeries', viewValue: 'TV Show'},
    {value: 'movie', viewValue: 'Movie'},
    {value: 'short', viewValue: 'Short Movie'}
  ];

  formatLabel(value: number) {

    //this.imdbRating = value;
    return value;
  }






  //search
  private readonly URL = 'http://greatergoodventures.in/lib/process.php?action=';
  title: any;
  img:any;
  data:any;
  cond: boolean;
  resolveItems(type: string ,genres: string[], rating:number): Observable<any> {
    console.log(genres);
    return this.http.get(this.URL+'gettitles&type='+type+'&genre%5B%5D='+genres[0]+'&year1=2010&year2=2020&keywords=&rating=' + rating);

  }
      saved=[""];
  rec=[""];

  searchinverse() {
    this.cond = true;
    this.saved=[""];
    this.rec=[""];
    this.resolveItems(this.selectedType,this.genres.value,this.imdbRating).subscribe(data=>{
      //this.data = data;
      for (let i = 0; i < 6; i++) {
        this.saved[i]=data[i]['id'];
      }
      for (let i = 0; i < 6; i++) {
        this.rec[i]=data[i+6]['id'];
      }
    });
  }
  //search end


}
