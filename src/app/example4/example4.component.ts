import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example4',
  templateUrl: './example4.component.html',
  styleUrls: ['./example4.component.css']
})
export class Example4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  obj = {
    title: "This is the orginal text"
  };

}
