import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'TestExample';
 
  clickMe() : void {
    this.title = "TestExample Working";
  }

}
