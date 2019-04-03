import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  counter: number;  // notice its number not int.

  constructor() {
    console.log("ExampleService Loaded");
    this.counter = 0;
   }

   update() {

   }
}
