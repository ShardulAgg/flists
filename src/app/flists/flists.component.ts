import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-flists',
  templateUrl: './flists.component.html',
  styleUrls: ['./flists.component.css']
})
export class FlistsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
  }

}
