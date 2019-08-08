import { Component,Input, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  // protected variables  ( can we make it private in angular?)
  @Input() title : string ;
  @Input() content :string ;
  @Input() loveIts : number  ;
  @Input() created_at : Date;
  last_update : Date;


  constructor() {}

  ngOnInit() {
    //I add this in case of not existing value for the score or date to avoid nan
    if (!this.loveIts){console.log("nan detected for [loveIts]"); this.loveIts =0;}
    if (!this.created_at){console.log("nan detected for [created_at]"); this.created_at = new Date();}
    if (!this.last_update){console.log("nan detected for [created_at]"); this.created_at = new Date();}
  }

  // add score to loveIts . generic function for both button
  like( score ) {
    console.log("score update requested " + score );
    this.loveIts = this.loveIts + score;
    this.last_update = new Date();
  }

  //accesssors to simplify coding
  isScorePositif() { return this.loveIts > 0; }
  isScoreNegatif() { return this.loveIts < 0; }
  getColor() {
    if (this.isScorePositif()) {return 'blue';}
    if (this.isScoreNegatif()) {return 'yellow';}
    return 'black'; //default
}
}
