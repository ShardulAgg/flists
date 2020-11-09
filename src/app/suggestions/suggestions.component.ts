import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  cond: boolean;

  constructor(
    private route: ActivatedRoute,
  ) {}
  sugg=["tt1187043","tt8367814","tt0091042","tt7131622","tt8946378","tt6751668"];
  ngOnInit(): void {
    this.cond=false;
  }
  searchinverse() {
    this.cond = true;
  }
}
