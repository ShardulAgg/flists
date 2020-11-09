import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.css']
})
export class TitlePageComponent implements OnInit {

  constructor(
    private _Activatedroute:ActivatedRoute
  ) {}
  titleName = 'Television';
  desc = 'shortDescription';
  featureID = this._Activatedroute.snapshot.paramMap.get("id");
  ngOnInit(): void {
  }

}
