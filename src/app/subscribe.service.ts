import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  obs = new Observable(observer => {
    setInterval(() => {
        observer.next("A new message has arrived");
        console.log("This will be executed for each subscriber");
    }, 1000);
});



  /* Read more about observables here
  * https://angular.io/guide/observables */
  constructor() { 
    
  }


}
