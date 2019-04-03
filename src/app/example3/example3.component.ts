import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.css']
})
export class Example3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  list = [
    { title: "Line one" },
    { title: "Line Two" },
    { title: "Line Three" }
  ];

  Add(_title : string) : void {
    this.list.push({ "title": _title });
  }
}
