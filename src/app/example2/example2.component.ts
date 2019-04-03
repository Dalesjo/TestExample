import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {

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
