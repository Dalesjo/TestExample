import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubscribeService } from './../subscribe.service';
import { TestBed } from '@angular/core/testing';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-example7',
  templateUrl: './example7.component.html',
  styleUrls: ['./example7.component.css']
})
export class Example7Component implements OnInit, OnDestroy{
  listSubscription : Subscription;
  listSubscription2 : Subscription;
  constructor(private subscribeService: SubscribeService) { 
  }

  list = [
    { title: "Line one" },
    { title: "Line Two" },
    { title: "Line Three" }
  ];

  
  ngOnInit() {
    this.listSubscription = this.subscribeService.obs.subscribe((message : string) => {
      this.list.push({ "title": message });
    });

    /*
    this.listSubscription2 = this.subscribeService.obs.subscribe((message : string) => {
      
    });*/

    console.log("Subscribed");
  }

  ngOnDestroy() {
    this.listSubscription.unsubscribe();
    /* this.listSubscription2.unsubscribe(); */
    console.log("Unsubscribed");
  }

}
