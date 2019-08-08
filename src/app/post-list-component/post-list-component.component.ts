import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  // create an empty variable
  @Input() postList = [];
  
  // i should force the variable init in the constructor but i don"t knwo how to do it yet
  constructor() { }
  
  ngOnInit() {
  }

}
