import { Component,Input, OnInit,Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface IOTT {
  logo:string;
  cbool:boolean;
  src:string;
}
@Component({
  selector: 'app-mini-title',
  templateUrl: './mini-title.component.html',
  styleUrls: ['./mini-title.component.css']
})
export class MiniTitleComponent implements OnInit {

  @Input() titleID: string;

  private readonly URL = 'http://greatergoodventures.in/lib/process.php?action=';
   shortDescription: any;
  title: any;
  img:any;
  vID: any;
  vurl: string;
  cond = true;
  platforms: any;
  netflix: any;
  data: any;
  resolveItems(id): Observable<any> {

    return this.http.get(this.URL+ 'getdetails&id=' + id);

  }

  constructor(private http: HttpClient) {

   }

   IOTTs:{  [name: string] : IOTT} = {};
   
   otts = { 
     netflix:{
 
    img:"/assets/images/image 6.png",
    src:"",
    cb:false
    },
    amazonprimevideo:{
     img:"/assets/images/image 7.png",
     src:"",
     cb:false
   },
    hotstar:{
     label:"Hotstar",
     short:"hst",
     value:"hotstar",
     img:"/assets/images/image 9.png",
     src:"",
     "cb":false
   },crunchyroll:{
     img:"/assets/images/image 10.png",
     src:"",
     cb:false
   }
  };

  attachplatforms(platforms:string[]):void{
    console.log(this.otts['hotstar']);
    for (var val of platforms){
            if(this.otts[val['platform']]){
              this.otts[val['platform']]['cb']=true;
              this.otts[val['platform']]['src']=val['url'];
            }
    }
  }
   ngOnInit():void{
   }
  ngOnChanges(): void {
    this.resolveItems(this.titleID).subscribe(data=>{
      this.data = data;
      this.title= data["Title"];
      this.shortDescription= data["Plot"];
      this.img= data["Poster"];
      this.vID = data["vid"];
      this.vurl = "https://www.youtube.com/embed/" + this.vID;
      this.platforms = data["platforms"]["IN"];
      this.attachplatforms(this.platforms);
    });

  
  }

}
