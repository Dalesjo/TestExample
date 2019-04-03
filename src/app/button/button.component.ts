import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  inputs: ['item']
})
export class ButtonComponent implements OnInit {
  @Input() item; // : datatype
  ischanged = false;

  constructor() { }

  ngOnInit() {
  }

  click(): void {
    this.item.title = "Button clicked in ButtonComponent";
    this.ischanged = true;
  }

}
