import { Component, OnInit } from '@angular/core';
import { ExampleService } from './../example.service';

@Component({
  selector: 'app-example5',
  templateUrl: './example5.component.html',
  styleUrls: ['./example5.component.css']
})
export class Example5Component implements OnInit {

  constructor(private exampleService: ExampleService) { 
    console.log("Example5Component Loaded");
    exampleService.counter += 1;
  }

  ngOnInit() {
  }

  
}
